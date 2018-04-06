export interface ReceiptSchema {
  system: string;
  transaction: string;
  root: string;
}

/**
 * Receipt for anchoring
 */
export class Receipt implements ReceiptSchema {
  /**
   * Blockchain used
   */
  system: string;

  /**
   * Transaction id
   */
  transaction: string;

  /**
   * Merkle root
   */
  root: string;

  constructor(data: any) {
    this.system = data.system || '';
    this.transaction = data.transaction || '';
    this.root = data.root || '';
  }
}
