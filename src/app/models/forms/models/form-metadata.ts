import { Step } from './step';

export class FormMetadata {
  id: string;
  name: string;
  //Steps or groups of the form
  definitions: Step[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.definitions = data.definition.map((s: any) => new Step(s));
  }
}
