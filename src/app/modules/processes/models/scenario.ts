export interface ScenarioSchema {
  id: string;
  name: string;
  description: string;
  actors: {
    [actor: string]: any;
  };
  actions: {
    [action: string]: any;
  };
  states: {
    [state: string]: any;
  };
  assets: {
    [asset: string]: any;
  };
  definitions: {
    [definition: string]: any;
  };
  info: any;
  permissions: {
    [permission: string]: string;
  };

  [key: string]: any;
}
