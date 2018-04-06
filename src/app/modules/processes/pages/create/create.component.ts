import { Component, OnInit } from '@angular/core';
import { ScenariosRepository } from '../../scenarios.repository';
import { Observable } from 'rxjs/Observable';
import { ScenarioSchema } from '../../models';
import { publishReplay, refCount } from 'rxjs/operators';
import { FormMetadata } from '@app/models/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  scenarios$: Observable<ScenarioSchema[]>;
  selectedScenario: ScenarioSchema | null = null;
  formMetadata: any; // Form metadata

  constructor(private scenariosRepo: ScenariosRepository) {
    this.scenarios$ = scenariosRepo.list().pipe(publishReplay(1), refCount());
  }

  ngOnInit() {}

  activateScenario(scenario: ScenarioSchema) {
    this.selectedScenario = scenario;
    // Get initial state
    const state = scenario.states[':initial'];
    const initialAction = scenario.actions[state.actions[0]];
    if (initialAction['form']) {
      const formPath = initialAction['form']['<ref>'];
      const formName = formPath.split('.').pop() as string;
      const formDefiniton = this.selectedScenario.definitions[formName];
      this.formMetadata = new FormMetadata(formDefiniton);
    }
  }

  formChanges(value: any) {
    console.log(value);
  }

  createProcess() {}
}
