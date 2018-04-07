import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProcessesRepository } from '../../processes.repository';
import { publishReplay, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  process$: Observable<any>;

  actor: any = 'client';

  constructor(private processesRepo: ProcessesRepository, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.process$ = this.processesRepo.get(params.id).pipe(publishReplay(1), refCount());
    });

  }

  ngOnInit() {}

  actionHandler(action: any) {
    console.log(action);
  }
}
