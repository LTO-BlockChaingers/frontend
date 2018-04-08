import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProcessesRepository } from '../../processes.repository';
import { publishReplay, refCount, take } from 'rxjs/operators';
import { AuthStore } from '@modules/auth';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  process$: Observable<any>;

  actor: any;

  constructor(private processesRepo: ProcessesRepository,
              private auth: AuthStore
              ) {
    this.process$ = this.processesRepo.get('test').pipe(publishReplay(1), refCount());
  }

  ngOnInit() {
    this.auth.user$.subscribe(u => {
      console.log(u);
      this.process$.subscribe(p => {
        Object.keys(p.actors).forEach(function (a) {
          if (p.actors[a].signkeys && p.actors[a].signkeys.user == u.keyPair.public) {
            this.actor = a;
          }
        })
      })
    });
  }

  actionHandler(action: any) {
    console.log(action);
  }
}
