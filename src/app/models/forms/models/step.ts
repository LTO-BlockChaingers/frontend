import { FieldDefinition } from './field-definition';
import {
  AmountDefinition,
  CheckboxDefinition,
  StaticDefinition,
  DateDefinition,
  EmailDefinition,
  ExpressionDefinition,
  GroupDefinition,
  LikertDefinition,
  MoneyDefinition,
  PasswordDefinition,
  SelectDefinition,
  TextareaDefinition,
  TextDefinition,
  NumberDefinition
} from './field-definitions';

export class Step {
  // Step label or header
  label: string;
  // Variable name for grouping field values
  group: string;
  // Link to anchor within linked template
  anchor: string;
  // Long text that is shown when filling out this step
  helptext: string;
  // Help tip for this step
  helptip: string;
  // Expression to show / hide this step
  conditions: string;
  // Field defintions
  fields: Array<FieldDefinition | StaticDefinition>;

  constructor(data: any) {
    this.label = data.label;
    this.group = data.group;
    this.anchor = data.anchor;
    this.helptext = data.helptext || '';
    this.helptip = data.helptip || '';
    this.conditions = data.conditions || '';

    this.fields = data.fields.map((field: any) => {
      const fieldType = field['$schema'].split('#').pop();
      switch (fieldType) {
        case 'amount':
          return new AmountDefinition(field);
        case 'checkbox':
          return new CheckboxDefinition(field);
        case 'date':
          return new DateDefinition(field);
        case 'email':
          return new EmailDefinition(field);
        case 'expression':
          return new ExpressionDefinition(field);
        case 'group':
          return new GroupDefinition(field);
        case 'likert':
          return new LikertDefinition(field);
        case 'money':
          return new MoneyDefinition(field);
        case 'password':
          return new PasswordDefinition(field);
        case 'select':
          return new SelectDefinition(field);
        case 'static':
          return new StaticDefinition(field);
        case 'text':
          return new TextDefinition(field);
        case 'textarea':
          return new TextareaDefinition(field);
        case 'number':
          return new NumberDefinition(field);
      }

      throw 'Unknow definition type: ' + fieldType;
    });
  }
}
