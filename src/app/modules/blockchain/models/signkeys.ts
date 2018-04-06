/**
 * Public cryptographic keys for signing
 */
export class SignKeys {
  [keyName: string]: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
