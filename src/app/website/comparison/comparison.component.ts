import { Component, OnInit } from '@angular/core';
import { ComparisonService } from 'src/app/shared/services/comparison-service';
import { PharmsServices } from 'src/app/shared/services/pharms';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  uz = false;
  ru = true;
  en = false;

  id = [];
  pharms = [];
  constructor(
    private comparisonService: ComparisonService,
    private pharmService: PharmsServices
  ) { 
    this.get()
  }
  get() {
        for (let i=0; i<2; i++) {
          this.pharmService.getPharm(this.comparisonService.object[i]).subscribe( res =>{
            this.pharms.push(res.json())
          })
        }
        console.log(this.pharms); 
  }

  uzb() {
    this.uz = true;
    this.ru = false;
    this.en = false;
  }

  
  rus() {
    this.uz = false;
    this.ru = true;
    this.en = false;
  }
  
  eng() {
    this.uz = false;
    this.ru = false;
    this.en = true;
  }

  ngOnInit() {
  }

}
