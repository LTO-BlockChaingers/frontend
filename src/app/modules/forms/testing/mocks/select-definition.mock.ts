import { SelectDefinition } from '@models/forms';

const MOCK: SelectDefinition = {
  type: 'Select',
  required: false,
  name: 'TEST_INPUT',
  label: 'TEST_LABEL',
  helptext: 'test_help_text',
  conditions: '',
  validation: 'validation.foo === 1',
  value: 'dummy',
  options: [
    {
      label: 'Option 1',
      value: 1
    },
    {
      label: 'Option 2',
      value: 2
    }
  ],
  options_selected: [],
  multiselect: false
};
export const SELECT_DEFINITION_MOCK = new SelectDefinition(MOCK);
