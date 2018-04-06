export interface ActorSchema {
  key: string;
  title: string;
  description: string;
}

export class Actor implements ActorSchema {
  /**
   * Reference of the actor
   */
  key: string;

  /**
   * Taken from scenario actor title
   */
  title: string;

  /**
   * Taken from scenario actor description
   */
  description: string;

  constructor(data: ActorSchema) {
    this.key = data.key || '';
    this.title = data.title || '';
    this.description = data.description || '';
  }
}
