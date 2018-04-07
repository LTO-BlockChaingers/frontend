import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProcessesRepository} from './processes.repository';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MockProcessesRepository implements ProcessesRepository {
  constructor(public http: HttpClient) {}

  list(): Observable<any[]> {
    return this.http.get<any>('/assets/mocks/process.json');
  }
}
