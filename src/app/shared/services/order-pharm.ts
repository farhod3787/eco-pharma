import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class OrderPharmService {
    
    constructor(private http: Http) { 
    }

    id =[];
    rate = [];
    num=[]; //  zakazni ID lari //
    sum: any;
    ana = [];

    testrate = [];


    mas=[]








}