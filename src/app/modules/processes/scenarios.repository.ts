import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ScenarioSchema } from './models';
import { map } from 'rxjs/operators';

@Injectable()
export class ScenariosRepository {
  constructor(public http: HttpClient) {}

  list(): Observable<ScenarioSchema[]> {
    return this.http.get<ScenarioSchema[]>('');
  }
}
