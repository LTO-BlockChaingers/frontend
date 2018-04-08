import { Injectable } from '@angular/core';
import * as Waves from 'wavesplatform'
import * as Utils from 'wavesplatform/dist/utils';
import * as Scenario1 from 'wavesplatform/dist/createDemoChain';
import * as Scenario2 from 'wavesplatform/dist/createDemoAssetScenario';
import * as Crypto from 'wavesplatform/dist/crypto'
import { IWavesAccount } from 'wavesplatform';



@Injectable()
export class WavesService {
  constructor() { }
  //sets data to account, 
  setData(seed: string, key: string, value: boolean | number | string): Promise<string> {
    return Waves.setData(seed, key, value)
  }
  getData(seed: string, key?: string): Promise<Waves.IDataEntry[]> {
    return Waves.getData(seed, key)
  }
  createScenario1(rootSeed: string, licenseType: string, depth: number): Promise<Waves.IWavesAccount[]> {
    return Scenario1.createDemoChain(rootSeed, licenseType, depth)
  }
  /**
  * Sets up the whole scenario2 for demo
  * Returns ISmartAssetScenario, with notary, king, assetId, accounts A and B, and transfer transaction avaiting notary and recipient approvals
  * 
  * @param {string} masterSeed
  * masterSeed should have waves on account to setup everything
  * @param {string} assetName
  */
  createScenario2(masterSeed: string, assetName: string, amount: number): Promise<Scenario2.ISmartAssetScenario> {
    return Scenario2.createDemoAssetScenario(masterSeed, assetName, amount)
  }

  async signTransaction(signerSeed: string, txId: string): Promise<Waves.IDataEntry> {
    await Scenario2.agreeForTransaction(signerSeed, txId)
    const addr = Waves.createWavesAccountFromSeed(signerSeed).address
    return await Utils.waitForData(addr, txId)
  }

}
