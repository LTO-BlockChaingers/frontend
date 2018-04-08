import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProcessesRepository } from '../../processes.repository';
import { publishReplay, refCount, take, switchMap, map, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { AuthStore } from '@modules/auth';
import { BlockchainRepository, Response } from '@modules/blockchain';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  process$: Observable<any>;

  actor$: Observable<string>;

  constructor(
    private processesRepo: ProcessesRepository,
    private route: ActivatedRoute,
    private auth: AuthStore,
    private chainsRepo: BlockchainRepository,
    private snackbar: MatSnackBar
  ) {
    this.process$ = this.route.params.pipe(
      switchMap(params => this.processesRepo.get(params.id)),
      publishReplay(1),
      refCount()
    );

    this.actor$ = combineLatest(this.auth.user$, this.process$).pipe(
      map(([user, process]) => {
        return Object.keys(process.actors).find(
          actor =>
            process.actors[actor].signkeys &&
            process.actors[actor].signkeys.user === user.keyPair.public
        );
      })
    );
  }

  ngOnInit() {}

  async actionHandler(action: any) {
    // TODO: Load chain
    // Add new response into chain
    // POST chain
    const chain$ = this.process$.pipe(
      switchMap(process => this.chainsRepo.getChainWithResource(process.id))
    );
    combineLatest(chain$, this.auth.user$, this.process$, this.actor$)
      .pipe(
        switchMap(([chain, user, process, actor]) => {
          const response = Response.buildInRuntime({
            key: 'ok', // @todo pass chosen response here
            process: {
              id: 'lt:/processes/' + process.id,
              scenario: {
                id: process.scenario
              }
            },
            action: {
              key: action.key
            },
            actor: {
              key: actor, // actor from scenario.actions,
              id: user.identities[chain.id], // identitiy ID,
              name: user.name, // name of the user,
              email: user.email // useremail
            },
            data: {} // Action response DATA (from form)
          });
          chain.add(JSON.stringify(response), user.keyPair);

          return this.chainsRepo.post(chain);
        })
      )
      .subscribe(() => {
        this.snackbar.open('EVENT POSTED', 'DISMISS', {
          duration: 3000
        });
      });
    console.log(action);
  }
}
