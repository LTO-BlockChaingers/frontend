import { Actor, ActorSchema } from './actor';
import { Receipt, ReceiptSchema } from './receipt';

export interface ResponseSchema {
  process: {
    id: string;
  };
  action: {
    key: string;
  };
  actor: {
    key: string;
    id: string; // Identity ID
    name: string; // User name
    email: string; // User email
  };
  display: 'never' | 'once' | 'always';
  data: any;
  date: string;
  hash: string;
  receipt?: ReceiptSchema;
  [key: string]: any;
}
/**
 * A performed action
 */
export class Response implements ResponseSchema {
  readonly $schema = 'http://specs.livecontracts.io/draft-01/12-response/schema.json#';
  process: {
    id: string;
  };

  action: {
    key: string;
  };

  /**
   * Actor that performed the action
   */
  actor: {
    key: string;
    id: string; // Identity ID
    name: string; // User name
    email: string; // User email
  };

  /**
   * Show the response
   */
  display: 'never' | 'once' | 'always';

  /**
   * Response data
   */
  data: any;

  /**
   * Date/time the response was given
   */
  date: string;

  /**
   * SHA256 hash
   */
  hash: string;

  /**
   * Anchoring receipt
   */
  receipt?: Receipt;

  /**
   * Build model from backend response
   * @param data backend response
   */
  static buildFromSchema(data: ResponseSchema) {}

  /**
   * When we build response in a runtime we have some fields which is not set
   * @param data initial data for response
   */
  static buildInRuntime(data: Pick<ResponseSchema, 'process' | 'action' | 'actor' | 'data'>) {
    return new Response({
      process: data.process,
      action: data.action,
      actor: data.actor,
      data: data.data,
      hash: '',
      date: '',
      display: 'always'
    });
  }

  constructor(data: ResponseSchema) {
    this.action = data.action;
    this.actor = data.actor;
    this.display = data.display || 'always';
    this.data = data.data;
    this.date = data.date || '';
    this.hash = data.hash || '';
    this.process = data.process;
    this.receipt = data.receipt ? new Receipt(data.receipt) : void 0;
  }
}
