import { Receipt, ReceiptSchema } from './receipt';
import { LTO, constants } from 'lto-api';
import base58 from '@utils/base58';

export interface EventSchema {
  body: string;
  previous: string;
  signkey: string;
  signature?: string;
  hash?: string;
  timestamp: string;
  receipt?: ReceiptSchema;
}

export class Event implements EventSchema {
  /**
   * Body of the event.
   *
   * contentEncoding: "base64"
   * contentMediaType: "application/json"
   */
  body: string;

  /**
   * Hash to previous event
   */
  previous: string;

  /**
   * Public key for signature
   */
  signkey: string;

  /**
   * Cryptographic signature
   */
  signature: string;

  /**
   * Hash of the event
   */
  hash: string;

  /**
   * Time of the event
   */
  timestamp: string;

  receipt?: Receipt;

  constructor(data: EventSchema) {
    this.timestamp = data.timestamp || '';
    this.body = data.body || '';
    this.previous = data.previous || '';
    this.signkey = data.signkey || '';
    this.signature = data.signature || '';
    this.hash = data.hash || '';
    this.receipt = data.receipt ? new Receipt(data.receipt) : void 0;
  }

  /**
   * Sign this event with a key
   * @param privateKey users private crypto key
   */
  sign(privateKey: string) {
    const api = new LTO(constants.NETWORK_BYTE_MAINNET);
    this.signature = api.signEvent(
      {
        body: this.body,
        timestamp: this.timestamp,
        previous: this.previous,
        signkey: this.signkey
      },
      privateKey
    );
  }

  /**
   * Update hash of this event
   */
  updateHash() {
    const api = new LTO(constants.NETWORK_BYTE_MAINNET);
    this.hash = api.hashEvent({
      body: this.body,
      timestamp: this.timestamp,
      previous: this.previous,
      signkey: this.signkey
    });
  }
}
