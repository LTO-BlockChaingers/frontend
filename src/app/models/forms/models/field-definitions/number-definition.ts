import { BasicFieldDefinition } from './basic-field-definition';

/**
 * @label Number
 * @description Numeric input field
 */
export class NumberDefinition extends BasicFieldDefinition {
  readonly type = 'Number';
  value: number;
  min: number;
  max: number;

  constructor(data: any) {
    super(data);
    this.value = data.value || 0;
    this.min = typeof data.min === 'undefined' ? Number.MIN_VALUE : data.min;
    this.max = typeof data.max === 'undefined' ? Number.MAX_VALUE : data.max;
  }
}
