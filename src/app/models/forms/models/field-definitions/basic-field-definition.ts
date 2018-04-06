export abstract class BasicFieldDefinition {
  label: string;
  name: string;
  helptext: string;
  conditions: string;
  required: boolean;
  validation: string;

  constructor(data: any) {
    this.label = data.label || '';
    this.name = data.name;
    this.helptext = data.helptext || '';
    this.conditions = data.conditions || '';
    this.validation = data.validation || '';
    this.required = !!data.required;
  }
}
