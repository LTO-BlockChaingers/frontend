import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './models';

@Injectable()
export class AuthStore {
  private readonly _LOCALSTORAGE_KEY = '_users';
  authenticated$: Observable<boolean>;
  user$: Observable<User | null>;

  private _user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() {
    this.user$ = this._user$.pipe(publishReplay(1), refCount());
    this.authenticated$ = this._user$.pipe(map(user => !!user));
  }

  login(email: string, password: string) {
    // TODO: get user info
    // TODO: decrypt phrase from user.encryptedPhraes
    // TODO: authenticate
    throw '[auth] AuthStore->login Not Implemented';
  }

  register(name: string, email: string, password: string) {
    // TODO: create seed
    // TODO: create user
    // TODO: save user to localstorage
    // TODO: login
    throw '[auth] AuthStore->register Not Implemented';
  }

  getRegisteredEmails() {
    return Object.keys(this._getUsers());
  }

  private _getUsers(): {[email: string]: User} {
    const usersJSONString = localStorage.getItem(this._LOCALSTORAGE_KEY) || '{}';
    return JSON.parse(usersJSONString);
  }

  private _getUser(email: string): User | null {
    const users = this._getUsers();
    return users[email] || null;
  }

  private _saveUser(user: User) {
    const users = this._getUsers();
    users[user.email] = user;
    localStorage.setItem(this._LOCALSTORAGE_KEY, JSON.stringify(users));
  }
}