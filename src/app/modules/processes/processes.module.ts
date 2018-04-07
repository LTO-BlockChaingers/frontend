import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenariosRepository } from './scenarios.repository';
import { ProcessesRepository } from './processes.repository';
import { MockScenarioRepository } from './mock-scenario.repository';
import { MockProcessesRepository } from './mock-processes.repository';

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
          provide: ProcessesRepository,
          useClass: MockProcessesRepository
        },
        {
          provide: ScenariosRepository,
          useClass: MockScenarioRepository
        }
      ]
    };
  }
}
