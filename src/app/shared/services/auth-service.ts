import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  url = environment.url;

  // url = "https://eco-pharmacy.herokuapp.com"

  // url = "";

  postLogin(body) {
    return this.http.post(this.url + '/api/users/sign', body)
  }

  get() {
    return this.http.get(this.url + '/api/users/verifyUser/' + localStorage.getItem('token'));
  }


  getPerson() {
    return this.http.get(this.url + '/api/person/verifyPerson/' + localStorage.getItem('token'));
  }



}
