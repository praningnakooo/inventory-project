import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './../../model/User';

import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from "./../../shared/service/error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  user_id: Pick<User, "user_id">

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) { }

  signup(user: Omit<User, "user_id">): Observable<User> {
    return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    );
  }

  login(email: Pick<User, "email">, password: Pick<User, "password">): Observable<{
    token: string; user_id: Pick<User, "user_id">
  }> {
    return this.http.post(`${this.url}/login`, { email, password }, this.httpOptions).pipe(
      first(),
      tap((tokenObject: { token: string; user_id: Pick<User, "user_id"> }) => {
        this.user_id = tokenObject.user_id;
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["masters/dashboard"]); //re route to homepage
      }),
      catchError(this.errorHandlerService.handleError<{
        token: string; user_id: Pick<User, "user_id">
      }>("login"))
    );
  }



}