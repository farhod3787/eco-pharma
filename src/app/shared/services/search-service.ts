import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class SearchService {
 
    object : any
 
    constructor(private http: Http) { 

    }
 
}