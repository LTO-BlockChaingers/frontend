import { AmountDefinition } from '@models/forms';

export const AMOUNT_DEFINITON_MOCK: AmountDefinition = {
  type: 'Amount',
  name: 'TestAmount',
  label: 'TestAmountLabel',
  decimals: 1,
  value: 50,
  helptext: 'test_help_text',
  conditions: '',
  validation: '',
  required: false,
  min: 0,
  max: 100,
  options: []
};
