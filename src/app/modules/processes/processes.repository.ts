import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProcessesRepository {
  constructor(public http: HttpClient) {}

  get(id: string): Observable<any> {
    // return this.http.get<any>(`http://localhost:3000/api/flow/processes/${id}`);
    return this.http.get<any>(`http://blockchaingers.legalthings.io/api/flow/processes/${id}`);
    // return this.http.get<any>('/assets/mocks/process.json');
  }

  list(): Observable<any[]> {
    return this.http.get<any[]>('http://blockchaingers.legalthings.io/api/flow/processes');
    // return this.http.get<any[]>('/assets/mocks/processes.json');
  }
}
