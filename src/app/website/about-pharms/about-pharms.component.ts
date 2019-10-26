import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { Pharm } from 'src/app/shared/models/pharm';
import { BasketService } from 'src/app/shared/services/basket-service';
@Component({
  selector: 'app-about-pharms',
  templateUrl: './about-pharms.component.html',
  styleUrls: ['./about-pharms.component.css']
})
export class AboutPharmsComponent implements OnInit {

  uz = false;
  ru = true;
  en = false;
  i=0;
  private pharm :Pharm;
  private id : string
 
  constructor(
    public pharmService: PharmsServices,   
    public basketService: BasketService,
    public route: ActivatedRoute,
    public router: Router
    ) { }

  q=1;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.id = paramMap.get("id");
        this.pharmService.getPharm(this.id).subscribe(postData => {
          this.pharm = postData.json()  
        });
      } else {
        this.id = null;
      }
    });
  }
  add() {
    this.q++;
  }

  min() {
    this.q--;
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
  abasket(id) {
    this.i=this.basketService.i;
    this.basketService.object[this.i] = id; 
     this.router.navigate(['basket'])
  }

 


}
