import { BasicFieldDefinition } from './basic-field-definition';
/**
 * @label Date
 * @description Date input field
 */
export class DateDefinition extends BasicFieldDefinition {
  readonly type = 'Date';
  value: string; // as ISO 8601 date
  min: string;
  max: string;

  constructor(data: any) {
    super(data);

    this.value = data.value || '';
    this.min = data.min || '';
    this.max = data.max || '';
  }
}
