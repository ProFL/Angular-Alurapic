import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient) { }

        async authenticate(userName: string, password: string) {
            return await this.http.post(`${API_URL}/user/login`, {
                userName,
                password,
            }).toPromise();
        }
}
