import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import * as jwt_decode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = null;
  private userSubject = new BehaviorSubject<User>(null);

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.user = user;
    this.userSubject.next(user);
  }

  public get ObservableUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  public get userName(): string {
    return this.user.name;
  }

  constructor(private tokenService: TokenService) {
    // tslint:disable-next-line:no-unused-expression
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  public isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  public logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  public setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }
}
