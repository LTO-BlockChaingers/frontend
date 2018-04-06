import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenariosRepository } from './scenarios.repository';
import { MockScenarioRepository } from './mock-scenario.repository';

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class ProcessesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProcessesModule,
      providers: [
        {
          provide: ScenariosRepository,
          useClass: MockScenarioRepository
        }
      ]
    };
  }
}
