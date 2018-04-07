import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProcessesRepository {
  constructor(public http: HttpClient) {}

  list(): Observable<any[]> {
    return this.http.get<any[]>('/api/flow/processes');
  }
}
