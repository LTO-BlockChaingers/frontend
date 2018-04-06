import { BasicFieldDefinition } from './basic-field-definition';

/**
 * @description Multi-line text input control
 */
export class TextareaDefinition extends BasicFieldDefinition {
  readonly type = 'Textarea';
  value: string;

  constructor(data: any) {
    super(data);
    this.value = data.value || '';
  }
}
