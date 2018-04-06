import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Portal } from '@angular/cdk/portal';

@Injectable()
export class NavbarService {
  get primaryPortal$() {
    return this.primaryPortalSubject.asObservable();
  }

  private primaryPortalSubject: BehaviorSubject<Portal<any> | null>;

  constructor() {
    this.primaryPortalSubject = new BehaviorSubject<any>(null);
  }

  setPrimaryPortal(portal: Portal<any>) {
    this.primaryPortalSubject.next(portal);
  }
}
