import { ExpressionDefinition } from '@models/forms';

export const EXPRESSION_DEFINITION_MOCK: ExpressionDefinition = {
  type: 'Expression',
  name: 'TEST_INPUT',
  label: 'placeholder',
  helptext: 'placeholder',
  conditions: '',
  value: '',
  validation: 'validation.foo === 1',
  expression: 'a + b',
  required: false
};
