import axios from 'axios'
import { BufferBe } from './BufferBE'
import * as Base58 from 'base-58'
import * as Long from 'long'
import * as Crypto from './crypto'

const apiBase = 'http://nodes.hacknet.wavesnodes.com:6869'

export type IDataEntryType = 'integer' | 'boolean' | 'binary'

export interface IDataEntry {
  key: string,
  type: IDataEntryType,
  value: number | boolean | string
}

interface IDataTransaction {
  version: number,
  senderPublicKey: string,
  data: IDataEntry[],
  fee: number,
  timestamp: number
}

interface ISignedDataTransacton {
  type: number,
  version: number,
  senderPublicKey: string,
  data: IDataEntry[],
  fee: number,
  timestamp: number,
  proofs: string[]
}

function signDataTransaction(tx: IDataTransaction, privateKey: string): ISignedDataTransacton {

  function writeEntry(buffer: BufferBe, entry: IDataEntry) {
    const keyBytes = new Buffer(entry.key)
    buffer.writeShortUnsigned(keyBytes.length)
    buffer.writeBytes(keyBytes)

    switch (entry.type) {
      case 'integer':
        buffer.writeByte(0)
        buffer.writeLong(Long.fromNumber(<number>entry.value))
        break
      case 'boolean':
        buffer.writeByte(1)
        buffer.writeByte(entry.value === true ? 1 : 0)
        break
      case 'binary':
        const bytes = Base58.decode(<string>entry.value)
        buffer.writeByte(2)
        buffer.writeShortUnsigned(bytes.length)
        buffer.writeBytes(bytes)
        break
    }
  }

  const buffer = BufferBe()
  buffer.writeByte(12)
  buffer.writeByte(tx.version)
  const senderPubKeyBytes = Base58.decode(tx.senderPublicKey)
  buffer.writeBytes(senderPubKeyBytes)
  buffer.writeShortUnsigned(tx.data.length)
  tx.data.forEach(entry => writeEntry(buffer, entry))
  buffer.writeLong(Long.fromNumber(tx.timestamp))
  buffer.writeLong(Long.fromNumber(tx.fee))
  const proof = Crypto.signBytes(buffer.raw(), privateKey)

  return {
    version: tx.version,
    data: tx.data,
    senderPublicKey: tx.senderPublicKey,
    proofs: [proof],
    timestamp: tx.timestamp,
    fee: tx.fee,
    type: 12
  }
}

export const setData = (seed: string, key: string, value: boolean | number | string) => new Promise<string>((resolve, reject) => {
  var type: IDataEntryType = 'boolean'
  if (typeof value == 'number')
    type = 'integer'
  else if (typeof value == 'string')
    type = 'binary'

  const keyPair = Crypto.createKeyPair(seed)
  const entry: IDataEntry = { key, type, value }
  const tx = {
    data: [entry],
    fee: 100000,
    senderPublicKey: keyPair.publicKey,
    timestamp: Date.now(),
    version: 1
  }

  const signedTransaction = signDataTransaction(tx, keyPair.privateKey)
  axios.post(`${apiBase}/transactions/broadcast`, signedTransaction).then(response => {
    resolve(response.data.id)
    console.log(response)
  }).catch(ex => {
    reject(ex.response.data.message)
  })
})

export const getData = (address: string, key?: string): Promise<IDataEntry[]> => new Promise<IDataEntry[]>((resolve, reject) => {
  const uri = key ? `${apiBase}/addresses/data/${address}/${key}` : `${apiBase}/addresses/data/${address}`
  axios.get(uri)
    .then(response => {
      const result = key ? [response.data] : response.data
      resolve(result)
    })
    .catch(ex => reject(ex))
})
