import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScenariosRepository } from './scenarios.repository';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { ScenarioSchema } from './models';

@Injectable()
export class MockScenarioRepository implements ScenariosRepository {
  constructor(public http: HttpClient) {}

  list(): Observable<ScenarioSchema[]> {
    return this.http.get<ScenarioSchema[]>('/assets/mocks/scenarios.json');
  }
}
