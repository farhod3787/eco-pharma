import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class ComparisonService {
  
    object = []
    id =0;
 
    constructor(private http: Http) { 

    }



}