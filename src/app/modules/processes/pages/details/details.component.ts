import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProcessesRepository } from '../../processes.repository';
import { publishReplay, refCount, take, switchMap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { AuthStore } from '@modules/auth';

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
    private auth: AuthStore
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

  actionHandler(action: any) {
    console.log(action);
  }
}
