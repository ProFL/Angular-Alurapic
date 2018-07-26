import { Injectable } from '@angular/core';

const KEY = 'authToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public hasToken(): boolean {
    return !!this.getToken();
  }

  public setToken(token: string): void {
    return window.localStorage.setItem(KEY, token);
  }

  public getToken(): string {
    return window.localStorage.getItem(KEY);
  }

  public removeToken(): void {
    return window.localStorage.removeItem(KEY);
  }
}
