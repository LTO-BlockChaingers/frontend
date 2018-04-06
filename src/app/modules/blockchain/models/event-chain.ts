import { LTO, constants, convert, base58 } from 'lto-api';
import { v4 as uuid } from 'uuid';
import { Event, EventSchema } from './event';
import { KeyPair } from '@modules/auth';
import { Identity } from './identity';

export interface EventChainSchema {
  id: string;
  events: EventSchema[];
}

/**
 * Live Contracts event chain domain model.
 *
 */
export class EventChain implements EventChainSchema {
  /**
   * Unique identifier for the event chain
   */
  id: string = '';

  /**
   * Chained events
   */
  events: Event[] = [];

  local: boolean = false;

  /**
   * Restore event chain from JSON
   * @param data JSON data to restore model
   */
  static fromJSON(data: EventChainSchema, local: boolean = false): EventChain {
    const chain = new EventChain();

    chain.local = local;
    chain.id = data.id;
    chain.events = data.events ? data.events.map((e: any) => new Event(e)) : [];

    return chain;
  }

  /**
   * Start new event chain
   */
  static startNewChain(identity: Identity, userKeys: KeyPair): EventChain {
    const chain = new EventChain();
    const api = new LTO(constants.NETWORK_BYTE_MAINNET);
    chain.id = api.createEventId(identity.signkeys.user);
    chain.add(JSON.stringify(identity), userKeys);

    return chain;
  }

  private constructor() {}

  /**
   * Add new event into this chain
   *
   * @param eventBody JSON string of event body
   * @param keyPair Users keypair
   */
  add(eventBody: string, keyPair: KeyPair): Event {
    const api = new LTO(constants.NETWORK_BYTE_MAINNET);
    // First event in the chain should have chain ID as previous event hash
    const previous = this.events.length
      ? this.events[this.events.length - 1].hash
      : api.hashEventId(this.id);
    const event = new Event({
      body: base58.encode(Uint8Array.from(convert.stringToByteArray(eventBody))),
      timestamp: new Date().toISOString(),
      previous,
      signkey: keyPair.public
    });

    event.sign(keyPair.private);
    event.updateHash();
    this.events.push(event);

    return event;
  }

  /**
   * Implement toJSON to avoid extra params leak into chain from our domain model.
   */
  toJSON(): EventChainSchema {
    return {
      id: this.id,
      events: this.events
    };
  }
}
