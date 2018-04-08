import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private processesRepo: ProcessesRepository, private route: ActivatedRoute, private auth: AuthStore) {
    this.route.params.subscribe(params => {
      this.process$ = this.processesRepo.get(params.id).pipe(publishReplay(1), refCount());
    });
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
