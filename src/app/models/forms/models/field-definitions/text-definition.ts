import { BasicFieldDefinition } from './basic-field-definition';

/**
 * @label Text
 * @description One-line text input field
 */
export class TextDefinition extends BasicFieldDefinition {
  readonly type = 'Text';
  value: string;
  pattern: string;
  mask: string;

  constructor(data: any) {
    super(data);
    this.value = data.value || '';
    this.pattern = data.pattern || '';
    this.mask = data.mask || '';
  }
}
