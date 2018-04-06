import { CheckboxDefinition } from '@models/forms';

export const CHECKBOX_DEFINITON_MOCK: CheckboxDefinition = {
  type: 'Checkbox',
  name: 'TEST_INPUT',
  label: 'TEST_LABEL',
  value: 'test_value',
  helptext: 'test_help_text',
  conditions: '',
  validation: 'validation.foo === 1',
  text: 'test text',
  required: false
};
