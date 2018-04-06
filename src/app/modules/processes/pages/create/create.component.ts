import { Component, OnInit } from '@angular/core';
import { ScenariosRepository } from '../../scenarios.repository';
import { Observable } from 'rxjs/Observable';
import { ScenarioSchema } from '../../models';
import { publishReplay, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  scenarios$: Observable<ScenarioSchema[]>;
  selectedScenario: ScenarioSchema | null = null;

  constructor(private scenariosRepo: ScenariosRepository) {
    this.scenarios$ = scenariosRepo.list().pipe(publishReplay(1), refCount());
  }

  ngOnInit() {}

  activateScenario(scenario: ScenarioSchema) {
    this.selectedScenario = scenario;
  }
}
