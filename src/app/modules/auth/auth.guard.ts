import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { take, tap } from 'rxjs/operators';

import { AuthStore } from './auth.store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthStore, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.authenticated$.pipe(
      take(1),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['auth', 'login']);
        }
      })
    );
  }
}
