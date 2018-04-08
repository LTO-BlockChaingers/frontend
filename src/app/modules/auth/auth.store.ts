import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, publishReplay, refCount, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './models';
import { LTO, constants } from 'lto-api';

@Injectable()
export class AuthStore {
  private readonly _LOCALSTORAGE_KEY = '_users';
  authenticated$: Observable<boolean>;
  user$: Observable<User | null>;

  private _user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private ltoApi: LTO;

  constructor() {
    this.user$ = this._user$.pipe(publishReplay(1), refCount());
    this.authenticated$ = this._user$.pipe(map(user => !!user));
    this.ltoApi = new LTO(constants.NETWORK_BYTE_MAINNET);
    // this.login('test@test', 'test');
  }

  login(email: string, password: string) {
    const user = this._getUser(email);
    if (!user) {
      throw 'No email found';
    }
    const phrase = this.ltoApi.decryptSeedPhrase(user.encryptedPhrase, password); // Will throw an error on fail
    this._user$.next(user);
  }

  register(name: string, email: string, password: string) {
    const seed = this.ltoApi.createSeed();
    const user: User = {
      name,
      email,
      keyPair: {
        public: seed.signKeys.publicKey,
        private: seed.signKeys.privateKey
      },
      address: seed.address,
      encryptedPhrase: seed.encrypt(password),
      identities: {}
    };

    this._saveUser(user);

    return this.login(email, password);
  }

  getRegisteredEmails() {
    return Object.keys(this._getUsers());
  }

  addIdentity(chainId: string, identityId: string) {
    this.user$.pipe(take(1)).subscribe(user => {
      user.identities[chainId] = identityId;
    });
  }

  private _getUsers(): { [email: string]: User } {
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
    this._user$.next(user);
  }
}
