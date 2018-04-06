import { GroupDefinition } from '@models/forms';

const MOCK: GroupDefinition = {
  type: 'Group',
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

export const GROUP_DEFINITON_MOCK: GroupDefinition = new GroupDefinition(MOCK);
