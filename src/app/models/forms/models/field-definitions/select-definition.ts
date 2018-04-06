import { BasicFieldDefinition } from './basic-field-definition';

/**
 * @description Input control to select on of the specified options
 */
export class SelectDefinition extends BasicFieldDefinition {
  readonly type = 'Select';
  options: { value: string | number; label: string }[];
  options_selected: string | number | Array<string | number> | null;
  multiselect: boolean;

  get value() {
    return this.options_selected;
  }

  constructor(data: any) {
    super(data);
    this.options = data.options || [];
    this.options_selected = data.options_selected || null;
    this.multiselect = !!data.multiselect;
  }
}
