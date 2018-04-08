import { Component, OnInit } from '@angular/core';
import { ScenariosRepository } from '../../scenarios.repository';
import { Observable } from 'rxjs/Observable';
import { ScenarioSchema } from '../../models';
import { publishReplay, refCount, take } from 'rxjs/operators';
// import { FormMetadata } from '@app/models/forms';
import { v4 as uuid } from 'uuid';
import { AuthStore } from '@modules/auth';
import { Identity, EventChain, Response, BlockchainRepository } from '@modules/blockchain';
import { Privilege } from '@app/modules/blockchain/models/privilege';
import { NavbarService } from '@shared/components/navbar/navbar.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { WavesService } from '@modules/waves';
import base58 from '@utils/base58';

interface SertificateValidity {
  valid: boolean;
  address: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // // each time the binding value changes
        // query(':leave', [stagger(100, [animate('0.5s', style({ opacity: 0 }))])], {
        //   optional: true
        // }),
        query(
          ':enter',
          [style({ opacity: 0 }), stagger(100, [animate('0.5s', style({ opacity: 1 }))])],
          { optional: true }
        )
      ])
    ])
  ]
})
export class CreateComponent implements OnInit {
  scenarios$: Observable<ScenarioSchema[]>;
  selectedScenario: ScenarioSchema | null = null;
  formMetadata: any; // Form metadata
  responseData: any = {};

  certificates: SertificateValidity[] = [];

  eventChain: EventChain;
  identity: Identity;

  constructor(
    private scenariosRepo: ScenariosRepository,
    private auth: AuthStore,
    private blockchainRepo: BlockchainRepository,
    private navbar: NavbarService,
    private router: Router,
    private waves: WavesService
  ) {
    this.scenarios$ = scenariosRepo.list().pipe(publishReplay(1), refCount());
    this.navbar.modalMode('Create process').subscribe(() => {
      this.cancel();
    });
  }

  async ngOnInit() {
    const user = await this.auth.user$.pipe(take(1)).toPromise();

    if (!user) {
      return;
    }

    const identityUuid = uuid();
    const signKey = '';
    const encryptionKey = '';
    this.identity = new Identity({
      id: identityUuid,
      name: user.name,
      email: user.email,
      signkeys: {
        system: signKey,
        user: user.keyPair.public
      },
      encryptkey: encryptionKey
    });

    this.eventChain = EventChain.startNewChain(this.identity, user.keyPair);
  }

  async activateScenario(scenario: ScenarioSchema) {
    const user = await this.auth.user$.pipe(take(1)).toPromise();

    if (!user) {
      return;
    }

    this.selectedScenario = scenario;
    // Get initial state
    const state = scenario.states[':initial'];
    const initialAction = scenario.actions[state.actions[0]];
    // Now we have to create first event for a process which contains scenario information
    this.eventChain.add(JSON.stringify(this.selectedScenario), user.keyPair);
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
    const identityUuid = uuid();

    // Now we have to create first event for a process which contains scenario information
    this.eventChain.add(JSON.stringify(this.selectedScenario), user.keyPair);

    // Now we need to create first 'response' for this process
    const response = Response.buildInRuntime({
      key: 'ok', // @todo pass chosen response here
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
        id: this.identity.id, // identitiy ID,
        name: user.name, // name of the user,
        email: user.email // useremail
      },
      data: this.responseData // Action response DATA (from form)
    });

    this.eventChain.add(JSON.stringify(response), user.keyPair);

    // After creation we have to save this chain locally
    // this.dataService.saveChain(chain);
    this.blockchainRepo.post(this.eventChain);

    return this.eventChain;
  }

  async checkLiability(addressToCheck: string, against: string, formData: any): Promise<boolean> {
    this.certificates = [];
    const LICENSE_TYPE = 'some_license_type';
    let valid = true;
    const initialState = this.selectedScenario.states[':initial'];

    const user = await this.auth.user$.pipe(take(1)).toPromise();

    if (!user) {
      return;
    }

    let address = addressToCheck;
    while (address) {
      let wavesData;
      try {
        wavesData = await this.waves.getData(address, LICENSE_TYPE);
      } catch (err) {
        this.addCheckedCertificate(address, false);
        valid = false;
        break;
      }

      if (wavesData.length === 0) {
        valid = false;
        break;
      }

      const decodedValue = base58.decode(wavesData[0].value as string);
      const decodedStr = String.fromCharCode.apply(null, decodedValue);
      const value = JSON.parse(decodedStr);

      // If right address and it can reissue this license we are done
      if (address === against && value.reissuable) {
        this.addCheckedCertificate(address, true);
        break;
      }

      if (!value.reissuable || value.root) {
        this.addCheckedCertificate(address, false);
        valid = false;
        break;
      }

      // Mark current address as valid
      this.addCheckedCertificate(address, true);
      // Check further
      address = value.emitter;
    }

    const response = Response.buildInRuntime({
      key: valid ? 'ok' : 'failed', // 'failed' if not ok
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
        id: this.identity.id, // identitiy ID,
        name: user.name, // name of the user,
        email: user.email // useremail
      },
      data: valid ? formData : void 0 // INFO FROM FORM
    });

    this.eventChain.add(JSON.stringify(response), user.keyPair);

    // Here our chain should contain [Identity, Scenario, Response];
    this.blockchainRepo.post(this.eventChain).subscribe(data => {
      // We suppose to get here positibe response so we need to navigate to process details
      this.auth.addIdentity(this.eventChain.id, this.identity.id);
      this.router.navigate(['..', 'details', 'process-id']);
    });
    return true;
  }

  addCheckedCertificate(address: string, valid: boolean) {
    this.certificates.push({
      valid,
      address
    });
  }
}
