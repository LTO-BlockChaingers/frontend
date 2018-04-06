import { BasicFieldDefinition } from './basic-field-definition';
/**
 * @label Money amount
 * @description Numeric input field with currency prefix
 */
export class MoneyDefinition extends BasicFieldDefinition {
  readonly type = 'Money';
  value: number;
  min: number;
  max: number;

  constructor(data: any) {
    super(data);
    this.value = data.value || 0;
    this.min = typeof data.min ? Number.MIN_VALUE : data.min;
    this.max = typeof data.max ? Number.MAX_VALUE : data.max;
  }
}
