import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  url = "http://localhost:5000"

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
