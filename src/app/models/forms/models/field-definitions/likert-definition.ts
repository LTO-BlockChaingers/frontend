import { BasicFieldDefinition } from './basic-field-definition';

/**
 * @description A grid input with questions and options
 */
export class LikertDefinition extends BasicFieldDefinition {
  readonly type = 'Likert';
  keys: string[]; // A set of questions
  values: string[]; // A set of possible answer

  get value(): string[] {
    return this.values;
  }

  constructor(data: any) {
    super(data);
    this.keys = data.keys || [];
    this.values = data.values || [];
  }
}
