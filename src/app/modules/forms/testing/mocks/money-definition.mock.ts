import { MoneyDefinition } from '@models/forms';

export const MONEY_DEFINITION_MOCK: MoneyDefinition = {
  type: 'Money',
  required: false,
  name: 'Test_Money_Definition',
  label: 'Test_Money_Definition',
  value: 777,
  helptext: 'test_help_text',
  conditions: '',
  validation: '',
  min: 0,
  max: 1000
};
