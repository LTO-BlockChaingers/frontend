import { BasicFieldDefinition } from './basic-field-definition';
/**
 * @description A calculated expression (non-UI)
 */
export class ExpressionDefinition extends BasicFieldDefinition {
  readonly type = 'Expression';
  expression: string; // Calculated expression in JavaScript
  value: any;

  constructor(data: any) {
    super(data);
    this.expression = data.expression;
    this.value = data.value || null;
  }
}
