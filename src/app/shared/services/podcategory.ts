import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {environment} from './../../../environments/environment';
@Injectable({
    providedIn: 'root'
  })
  export class PodCategoryService {

    constructor(private http: Http) {

    }

  url = environment.url + "/api/podcategory";
    // url = "/api/categories";
    // url = "https://eco-pharmacy.herokuapp.com/api/podcategory"


    get() {
        return this.http.get(this.url + '/get');
    }

    post(body) {
        return this.http.post(this.url + '/post/' + localStorage.getItem('token'), body);
    }

    delete (id) {
        return this.http.delete(this.url + '/delete/' + id +'/'+ localStorage.getItem('token'));
    }



}
