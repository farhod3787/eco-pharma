import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search-service';
import { BasketService } from 'src/app/shared/services/basket-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { PharmsServices } from 'src/app/shared/services/pharms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pharm : [];

  uz = false;
  ru = true;
  en = false;
  i=0;
  q=0;
  // private pharm :Pharm;
  private id : string
  name : string

  constructor( 
    private searchService: SearchService,
    private basketService: BasketService,
    private router : Router,
    public route: ActivatedRoute,
    private pharmService: PharmsServices

    ) {

      
   }
  
 
  
 
  ngOnInit() {
 
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("name")) {
        this.name = paramMap.get("name");
  
        this.pharmService.getsearch({"name": this.name}).subscribe(postData => {
          this.pharm = postData.json();
          console.log(this.pharm );  
        });
        
      } else {
        this.id = null;
      }
    });
    // console.log(this.searchService.object);
    // this.pharm = this.searchService.object
    // console.log(this.pharm);


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
