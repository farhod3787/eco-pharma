import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {

    constructor(private http: Http) {

    }

    url = "http://localhost:5000/api/categories";
    // url = "/api/categories";
    // url = "https://eco-pharmacy.herokuapp.com/api/categories"

    getOne(id) {
      return this.http.get(this.url + '/getCategory/' + id)
    }

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
