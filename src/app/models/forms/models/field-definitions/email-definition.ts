import { BasicFieldDefinition } from './basic-field-definition';
/**
 * @label E-mail
 * @description Input field that should contain an e-mail address
 */
export class EmailDefinition extends BasicFieldDefinition {
  readonly type = 'Email';
  value: string;

  constructor(data: any) {
    super(data);

    this.value = data.value || '';
  }
}
