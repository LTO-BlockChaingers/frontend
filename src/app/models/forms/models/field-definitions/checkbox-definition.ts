import { BasicFieldDefinition } from './basic-field-definition';
/**
 * @description Single checkbox
 */
export class CheckboxDefinition extends BasicFieldDefinition {
  readonly type = 'Checkbox';
  value: string | number; // The value that the variable holds if the checkbox is selected
  text: string; // The text displayed with the checkbox

  constructor(data: any) {
    super(data);
    this.value = data.value;
    this.text = data.text || '';
  }
}
