import { BasicFieldDefinition } from './basic-field-definition';
/**
 * @label Number with unit
 * @description Numeric input field with suffix
 */
export class AmountDefinition extends BasicFieldDefinition {
  readonly type = 'Amount';
  value: number;
  decimals: number;
  min: number;
  max: number;
  options: {
    singular: string;
    plural: string;
  }[];

  constructor(data: any) {
    super(data);
    this.value = data.value || 0;
    this.decimals = data.decimals || 0;
    this.min = typeof data.min === 'undefined' ? Number.MIN_VALUE : data.min;
    this.max = typeof data.max === 'undefined' ? Number.MAX_VALUE : data.max;
    this.options = data.options || [];
  }
}
