import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { FormMetadata } from './models';

@Injectable()
export class FormsDataService {
  constructor(private http: HttpClient) {}

  metadata(formName: string): Observable<FormMetadata> {
    return this.http.get('/asdasdasd').pipe(map(response => new FormMetadata(response)));
  }
}
