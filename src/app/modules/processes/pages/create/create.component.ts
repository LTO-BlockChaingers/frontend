import { Component, OnInit } from '@angular/core';
import { ScenariosRepository } from '../../scenarios.repository';
import { Observable } from 'rxjs/Observable';
import { ScenarioSchema } from '../../models';
import { publishReplay, refCount, take } from 'rxjs/operators';
import { FormMetadata } from '@app/models/forms';
import { v4 as uuid } from 'uuid';
import { AuthStore } from '@modules/auth';
import { Identity, EventChain, Response } from '@modules/blockchain';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  scenarios$: Observable<ScenarioSchema[]>;
  selectedScenario: ScenarioSchema | null = null;
  formMetadata: any; // Form metadata
  responseData: any = {};

  constructor(private scenariosRepo: ScenariosRepository, private auth: AuthStore) {
    this.scenarios$ = scenariosRepo.list().pipe(publishReplay(1), refCount());
  }

  ngOnInit() {}

  activateScenario(scenario: ScenarioSchema) {
    this.selectedScenario = scenario;
    // Get initial state
    const state = scenario.states[':initial'];
    const initialAction = scenario.actions[state.actions[0]];
    if (initialAction['form']) {
      this.formMetadata = new FormMetadata(initialAction['form']);
    }
  }

  formChanges(value: any) {
    this.responseData = value;
  }

  async createProcess() {
    if (!this.selectedScenario) {
      return;
    }
    const user = await this.auth.user$.pipe(take(1)).toPromise();

    if (!user) {
      return;
    }

    const initialState = this.selectedScenario.states[':initial'];
    const signKey = '';
    const encryptionKey = '';

    const identitiy = new Identity({
      id: uuid(),
      name: user.name,
      email: user.email,
      signkeys: {
        system: signKey,
        user: user.keyPair.public
      },
      encryptkey: encryptionKey
    });

    const chain = EventChain.startNewChain(identitiy, user.keyPair);
    // Now we have to create first event for a process which contains scenario information
    chain.add(JSON.stringify(this.selectedScenario), user.keyPair);
    // Now we need to create first 'response' for this process
    const response = Response.buildInRuntime({
      process: {
        id: 'lt:/processes/' + uuid()
      },
      action: {
        key: initialState.actions[0]
      },
      actor: {
        key: this.selectedScenario.actions[initialState.actions[0]].actor, // actor from scenario.actions,
        id: identitiy.id, // identitiy ID,
        name: user.name, // name of the user,
        email: user.email // useremail
      },
      data: this.responseData // Action response DATA (from form)
    });
    chain.add(JSON.stringify(response), user.keyPair);

    // After creation we have to save this chain locally
    // this.dataService.saveChain(chain);
    console.log('SAVE CHAIN');

    return chain;
  }
}
