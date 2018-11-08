import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConfig } from '../utils/app.config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  constructor(private http: HttpClient) {}

  signInUser(password: string, email: string) {
    const params = new HttpParams()
      .set('Email', email)
      .set('Password', password);

    return this.http.post(`${this.apiUrl}/login/`, params);
  }
}
