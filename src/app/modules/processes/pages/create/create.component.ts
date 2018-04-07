import { Component, OnInit } from '@angular/core';
import { ScenariosRepository } from '../../scenarios.repository';
import { Observable } from 'rxjs/Observable';
import { ScenarioSchema } from '../../models';
import { publishReplay, refCount, take } from 'rxjs/operators';
import { FormMetadata } from '@app/models/forms';
import { v4 as uuid } from 'uuid';
import { AuthStore } from '@modules/auth';
import { Identity, EventChain, Response, BlockchainRepository } from '@modules/blockchain';
import { Privilege } from '@app/modules/blockchain/models/privilege';
import { NavbarService } from '@shared/components/navbar/navbar.service';
import { Router } from '@angular/router';

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

  constructor(
    private scenariosRepo: ScenariosRepository,
    private auth: AuthStore,
    private blockchainRepo: BlockchainRepository,
    private navbar: NavbarService,
    private router: Router
  ) {
    this.scenarios$ = scenariosRepo.list().pipe(publishReplay(1), refCount());
    this.navbar.modalMode('Create process').subscribe(() => {
      this.cancel();
    });
  }

  ngOnInit() { }

  activateScenario(scenario: ScenarioSchema) {
    this.selectedScenario = scenario;
    // Get initial state
    const state = scenario.states[':initial'];
    const initialAction = scenario.actions[state.actions[0]];
    if (initialAction['form']) {
      this.formMetadata = new FormMetadata(initialAction['form']);
    }
  }

  cancel() {
    this.navbar.resetToDefaults();
    this.router.navigate(['..']);
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
    const identityUuid = '0c1d7eac-18ec-496a-8713-8e6e5f098686'; // uuid(); // hardcoded temporarily  (scenario actor id must match this id)

    const identitiy = new Identity({
      id: identityUuid,
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
      key: 'ok',
      process: {
        id: 'lt:/processes/' + uuid(),
        scenario: {
          id: this.selectedScenario.id
        }
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
    this.blockchainRepo.post(chain);

    return chain;
  }
}
