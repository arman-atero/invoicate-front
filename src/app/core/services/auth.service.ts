import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appConfig } from '../../utils/app.config';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  constructor(private http: HttpClient) {}

  signInUser(password: string, email: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer'
    });
    const params = new HttpParams()
      .set('username', email)
      .set('password', password);
    return this.http.post(`${this.apiUrl}/api/token/`, params, {
      headers: headers
    });
  }
  verifyEmail(email) {
    console.log(email);
    const params = new HttpParams().set('Email', email);
    return this.http.post(`${this.apiUrl}/verifyEmail/`, params);
  }
  registration(register) {
    console.log(register);
    const jsonInput = JSON.stringify({
      first_name: register.secondFormGroup.firstName,
      last_name: register.secondFormGroup.lastName,
      email: register.firstFormGroup.emailAddress,
      username: register.firstFormGroup.emailAddress,
      password: register.firstFormGroup.passConfirm,
      profile: {
        address: register.secondFormGroup.address,
        city: register.secondFormGroup.city,
        state: register.secondFormGroup.state,
        country: register.secondFormGroup.country,
        postcode: register.secondFormGroup.postalCode,
        company_name: register.endFormGroup.vanityUrl,
        business_name: register.endFormGroup.businnesName,
        taxcode: ''
      }
    });
    const params = new HttpParams().set('jsonInput', jsonInput);
    return this.http.post(`${this.apiUrl}/api/users/`, params);
  }

  confirmEmail(email) {
    const params = new HttpParams().set('Email', email);
    return this.http.post(`${this.apiUrl}/ConfirmEmail/`, params);
  }
}
