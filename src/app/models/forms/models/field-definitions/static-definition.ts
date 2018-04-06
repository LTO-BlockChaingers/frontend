/**
 * @description Static HTML for display purposes only
 */
export class StaticDefinition {
  readonly type = 'Static';
  content: string;
  conditions: string;

  constructor(data: any) {
    this.content = data.content;
    this.conditions = data.conditions || '';
  }
}
