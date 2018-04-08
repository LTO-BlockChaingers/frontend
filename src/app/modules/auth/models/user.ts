import { KeyPair } from './keypair';

export interface User {
  name: string;
  email: string;
  address: string;
  encryptedPhrase: string;
  keyPair: KeyPair;
  identities: {
    [chainId: string]: string;
  };
}
