import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: Http) { }

    url = "http://localhost:5000/api/person";
    // url = "/api/person";
    // url = "https://eco-pharmacy.herokuapp.com/api/person"


    get() {
      return this.http.get( this.url + '/get');
    }
    getVerify() {
        return this.http.get( this.url +'/verifyPerson/' + localStorage.getItem('token'));
    }


    post(body) {
      return this.http.post(this.url + '/post', body);
    }

    getPerson() {
      return this.http.get(this.url + '/getPerson/' + localStorage.getItem('token'));
    }

    update(body, id) {
      return this.http.patch(this.url + '/patch/' + id + '/' + localStorage.getItem('token'), body);
    }

    delete(id) {
      return this.http.delete(this.url + '/delete/' + id);
    }



}
