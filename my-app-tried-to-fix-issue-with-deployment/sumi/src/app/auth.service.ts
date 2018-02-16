import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ErrorHandlingService } from './errorhandling.service';
import { MessageService } from './message.service';

class Credentials {
  constructor(public username: string, public password: string) {

  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  username: string;


  constructor(
    private http: HttpClient,
    private message: MessageService,
    private eh: ErrorHandlingService
  ) { }

  login(username, password) : Observable<boolean> {
    const authUrl = `api-token-auth/`;
    var credentials = new Credentials(username, password);
    return this.http
      .post(authUrl, credentials, httpOptions).pipe(
        map(results => {
          if (results['token']) {
            localStorage.setItem('umichas-jwt-token', results['token']);
            localStorage.setItem('username_', username)
            this.isLoggedIn = true;
            this.username = username;
            this.message.add('User ${username} logged in');
            console.log(localStorage.getItem('username'),localStorage.getItem('username_'),localStorage.getItem('umichas-jwt-token'));
            return true;
          } else {
            return false;
          }
        }),
        catchError(this.eh.handleError<boolean>(`login username=${username}`,
          false))
      );

  }

  logout(): void {
    this.isLoggedIn = false;
    this.message.add('User ${this.username} logged out');
    this.username = null;
    localStorage.clear()
    console.log(localStorage.getItem('umichas-jwt-token'),localStorage.getItem('username'),localStorage.getItem('username_'))
  }


}