/**
 * Privilege given to this identity
 */
export class Privilege {
  /**
   * @todo: add description
   */
  schema: string;

  /**
   * Privilege only applies to this resource
   */
  id: string;

  /**
   * Body is filtered to only include these properties
   */
  only: string[];

  /**
   * Body is filtered not to include these properties
   */
  not: string[];

  /**
   * Only this key type(s) may be used
   */
  signkey: string[];

  constructor(data: any) {
    this.schema = data.schema;
    this.id = data.id;
    this.only = data.only;
    this.not = data.not;
    this.signkey = data.signkey ? [].concat(data.signKey) : [];
  }
}
