import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {environment} from './../../../environments/environment';
@Injectable({
    providedIn: 'root'
  })
  export class ModeratorsServices {

    constructor(private http: Http) {

    }

  url = environment.url + '/api/users';
  // url = "http://localhost:5000"
    // url = "/api/users";
  // url = "https://eco-pharmacy.herokuapp.com/api/users"


    get() {
       return this.http.get(this.url + '/getModerators');
    }

    post(body) {
      return this.http.post(this.url + '/post', body);
    }

    delete(id) {
      return this.http.delete(this.url + '/delete/' + id + '/' + localStorage.getItem('token'));
    }

}
