import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class PharmsServices {


    constructor(private http: Http) {

    }
  url = "http://localhost:5000/api/pharm"
  // url = "/api/pharm";
    // url = "https://eco-pharmacy.herokuapp.com/api/pharm"


    get() {
      return this.http.get(this.url + '/getall');
    }

    getCat(cat_name) {
        return  this.http.get(this.url + '/getCat/' + cat_name)
    }

    post(
      name: string,
      price: string,
      logo: File,

      sort: string,
      sort1: string,
      sort2: string,

      sale: string,
      roomy: string,
      pod_category: string,
      inform: string,
      rate: string
     ) {
      const Pharm = new FormData();
      Pharm.append("name", name);
      Pharm.append("image", logo);
      Pharm.append("price", price);

      Pharm.append("sort[0]", sort);
      Pharm.append("sort[1]", sort1);
      Pharm.append("sort[2]", sort2);

      Pharm.append("sale", sale);
      Pharm.append("roomy", roomy);
      Pharm.append("pod_category", pod_category);
      Pharm.append("inform", inform);
      Pharm.append("rate", rate);
      return this.http
      .post(this.url +'/post/' + localStorage.getItem('token'), Pharm)
      .subscribe( response =>{
        console.log("Success")
      })
    }

    getPharm(id) {
        return this.http.get(this.url + '/getpharm/' + id);
    }

    getCat1() {
      return this.http.get(this.url + '/getCat1');
    }

    getCat2() {
        return this.http.get(this.url + '/getCat2');

    }

    getsearch(body) {
        return this.http.post(this.url + '/search', body);
    }

    patchRate(id, body) {
      console.log("Service:  ");
      console.log(body);
      return this.http.patch(this.url + '/updaterate/' + id, body);
    }

    patchPharm(
      id,
      name: string,
      price: string,
      logo: File,
      sort: string,
      sort1: string,
      sort2: string,
      sale: string,
      roomy: string,
      pod_category: string,
      inform: string,
      rate: string )
      {
      const Pharm = new FormData();
      Pharm.append("name", name);
      Pharm.append("image", logo);
      Pharm.append("price", price);

      Pharm.append("sort[0]", sort);
      Pharm.append("sort[1]", sort1);
      Pharm.append("sort[2]", sort2);

      Pharm.append("sale", sale);
      Pharm.append("roomy", roomy);
      Pharm.append("pod_category", pod_category);
      Pharm.append("inform", inform);
      Pharm.append("rate", rate);

      return this.http.patch(this.url + '/updatepharm/' + id + '/' + localStorage.getItem('token'), Pharm)
    }

    delete(id) {
      return this.http.delete(this.url + '/deletepharm/' + id + '/' + localStorage.getItem('token'));
    }




  }
