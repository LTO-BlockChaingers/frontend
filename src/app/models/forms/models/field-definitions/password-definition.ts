import { BasicFieldDefinition } from './basic-field-definition';

/**
 * @label Password
 * @description Password input field
 */
export class PasswordDefinition extends BasicFieldDefinition {
  readonly type = 'Password';
  value: string;
  pattern: string;

  constructor(data: any) {
    super(data);
    this.value = data.value || '';
    this.pattern = data.pattern || '';
  }
}
