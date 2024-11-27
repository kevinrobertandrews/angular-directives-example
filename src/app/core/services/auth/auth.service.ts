import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserType } from '../features/models/FeatureSet.type';

interface User {
  type: UserType;
  name: string;
}

type Users = Record<string, User>;

const users: Users = {
  guest: {
    type: 'guest',
    name: 'Guest',
  },
  user: {
    type: 'user',
    name: 'Userguy',
  },
  admin: {
    type: 'admin',
    name: 'Bob',
  },
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<User>(users['guest']);
  public user$ = this._user.asObservable();

  public selectUser(user: UserType) {
    console.log('selecting user', user);
    this._user.next(users[user]);
  }
}
