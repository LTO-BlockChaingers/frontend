import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenariosRepository } from './scenarios.repository';
import { ProcessesRepository } from './processes.repository';
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
        ProcessesRepository,
        {
          provide: ScenariosRepository,
          useClass: MockScenarioRepository
        }
      ]
    };
  }
}
