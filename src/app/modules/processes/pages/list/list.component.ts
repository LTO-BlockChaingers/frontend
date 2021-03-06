import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProcessesRepository } from '../../processes.repository';
import { publishReplay, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns = ['name', 'id'];
  processes$: Observable<any[]>;

  constructor(private processesRepo: ProcessesRepository) {
    this.processes$ = this.processesRepo.list().pipe(publishReplay(1), refCount());
  }

  ngOnInit() {}
}
