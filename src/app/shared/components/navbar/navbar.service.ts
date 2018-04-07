import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Portal } from '@angular/cdk/portal';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { take } from 'rxjs/operators';

@Injectable()
export class NavbarService {
  readonly defaultTitle = 'Livecontracts';

  isModal$: ReplaySubject<boolean> = new ReplaySubject();
  title$: ReplaySubject<string> = new ReplaySubject();

  private _closeModalClick = new Subject();

  constructor() {
    this.isModal$.next(false);
    this.title$.next(this.defaultTitle);
  }

  modalMode(title: string): Observable<any> {
    this.isModal$.next(true);
    this.title$.next(title);

    return this._closeModalClick.pipe(take(1));
  }

  closeClick() {
    this._closeModalClick.next();
  }

  resetToDefaults() {
    this.isModal$.next(false);
    this.title$.next(this.defaultTitle);
  }
}
