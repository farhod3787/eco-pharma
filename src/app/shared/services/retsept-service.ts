import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class RetseptService {

    constructor(private http: Http) {

    }

    url = "http://localhost:5000/api/retsept";
    // url = "/api/categories";
    // url = "https://eco-pharmacy.herokuapp.com/api/retsept"


    get() {
        return this.http.get(this.url + '/get');
    }

    getTrue () {
      return this.http.get(this.url + '/getTrue')
    }

    post(body) {
        return this.http.post(this.url + '/create', body);
    }

    delete (id) {
        return this.http.delete(this.url + '/delete/' + id );
    }



}