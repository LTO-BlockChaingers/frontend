import { BasicFieldDefinition } from './basic-field-definition';
/**
 * @description Checkbox or radio button group
 */
export class GroupDefinition extends BasicFieldDefinition {
  readonly type = 'Group';
  options: { value: string | number; label: string }[];
  options_selected: string | number | Array<string | number> | null;
  multiselect: boolean;

  // To unify unit tests use value property
  get value(): any {
    return this.options_selected;
  }

  constructor(data: any) {
    super(data);
    this.options = data.options || [];
    this.options_selected = data.options_selected || null;
    this.multiselect = !!data.multiselect;
  }
}
