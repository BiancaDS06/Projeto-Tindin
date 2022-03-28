import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable()
export class LoginService {
  private API = environment.tinDinAPI;

  constructor(private http: HttpClient) {}

  login(login: LoginModel) {
    return this.http.post(`${this.API}auth`, login).pipe(pluck('token'));
  }
}
