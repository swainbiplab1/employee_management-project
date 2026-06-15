import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {


  private baseUrl = 'http://localhost:9099';

  constructor(private http: HttpClient) {}
  
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/register`, user);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, loginRequest);
  }
  saveToken(token: string) {

    localStorage.setItem(
      'token',
      token
    );

  }

  // getToken() {

  //   return localStorage.getItem(
  //     'token'
  //   );

  // }

   getToken(): string {

    if (typeof window === 'undefined') {
      return '';
    }

    return localStorage.getItem('token') || '';
  }
  logout() {

    localStorage.removeItem(
      'token'
    );

  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem(
      'token'
    );

  }
}
