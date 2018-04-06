import { Privilege } from './privilege';
import { SignKeys } from './signkeys';
import base58 from '@utils/base58';
import { LTO } from 'lto-api';

/**
 * A contract in natural language with related data and procedures
 */
export class Identity {
  readonly $schema = 'http://specs.livecontracts.io/draft-01/02-identity/schema.json#';
  id: string;
  name: string;
  email: string;
  info: object | null;
  node: string;
  privileges: Privilege[];

  signkeys: {
    system: string;
    user: string;
  };
  encryptkey: string;

  constructor(data: Partial<Identity>) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.email = data.email || '';
    this.info = data.info || null;
    this.node = data.node || '';
    this.privileges = data.privileges
      ? data.privileges.map((privilege: any) => new Privilege(privilege))
      : [];

    if (!data.signkeys) {
      throw 'Unable to create Identity without signkeys!';
    }
    this.signkeys = data.signkeys;
    this.encryptkey = data.encryptkey || '';
  }
}
