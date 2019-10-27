import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class OrdersService {

    constructor(private http: Http) {

    }
  url = "http://localhost:5000"
    // url = "";
  // url = "https://eco-pharmacy.herokuapp.com"


    get() {
      return this.http.get(this.url + '/api/orders/getall');
    }
    getsuccess() {
      return this.http.get(this.url + '/api/orders/getsucces');
    }

    getdoing() {
      return this.http.get( this.url + '/api/orders/getdoing');
    }

    post(body) {
      return this.http.post(this.url + '/api/orders/post/' + localStorage.getItem('token'), body);
    }

    patch(id, body) {
      return this.http.patch(this.url + '/api/orders/update/' + id + '/' + localStorage.getItem('token'), body); // Success
    }

    update(id, body) {
      return this.http.patch(this.url + '/api/orders/patch/' + id + '/' + localStorage.getItem('token'), body);  // Doing
    }

    delete(id) {
      return this.http.delete( this.url + '/api/orders/delete/' + id);
    }




  }
