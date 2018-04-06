import {
  AmountDefinition,
  CheckboxDefinition,
  DateDefinition,
  EmailDefinition,
  ExpressionDefinition,
  GroupDefinition,
  LikertDefinition,
  MoneyDefinition,
  PasswordDefinition,
  SelectDefinition,
  TextDefinition,
  TextareaDefinition,
  NumberDefinition
} from './field-definitions';

export type FieldDefinition =
  | AmountDefinition
  | CheckboxDefinition
  | DateDefinition
  | EmailDefinition
  | ExpressionDefinition
  | GroupDefinition
  | LikertDefinition
  | MoneyDefinition
  | PasswordDefinition
  | SelectDefinition
  | TextDefinition
  | TextareaDefinition
  | NumberDefinition;
