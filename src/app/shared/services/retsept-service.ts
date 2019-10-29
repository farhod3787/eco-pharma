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

    post(
      number: string,
      image: File | string
    ) {
      const Retsept = new FormData();
      Retsept.append("number", number);
      Retsept.append("image", image);
        return this.http.post(this.url + '/create', Retsept);
    }

    delete (id) {
        return this.http.delete(this.url + '/' + id );
    }
    patch(id, body) {
      return this.http.patch(this.url + '/' + id, body)
    }



}
