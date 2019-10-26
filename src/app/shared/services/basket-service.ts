import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class BasketService {
  
    obj = {
        id: String,
        price: Number
    }
    i=0;

    object = []

    data=0;


    constructor(private http: Http) { 

    }



}