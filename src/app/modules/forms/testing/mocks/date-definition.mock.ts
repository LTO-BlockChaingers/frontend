import { DateDefinition } from '@models/forms';

export const DATE_DEFINITON_MOCK: DateDefinition = {
  type: 'Date',
  name: 'TEST_INPUT',
  label: 'TEST_LABEL',
  value: '',
  helptext: 'test_help_text',
  conditions: '',
  validation: 'validation.foo === 1',
  min: '',
  max: '',
  required: false
};
