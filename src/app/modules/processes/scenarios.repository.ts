import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Scenario
} from './models';
import { map } from 'rxjs/operators';

@Injectable()
export class ScenariosRepository {
  constructor(public http: HttpClient) {}

  list(): Observable<Scenario[]> {
    return this.http.get<Scenario[]>('');
  }
}
