import { Component, OnInit } from '@angular/core';
import { PharmsServices } from 'src/app/shared/services/pharms'
import { BasketService } from 'src/app/shared/services/basket-service';
import Swal from 'sweetalert2'
import { ComparisonService } from 'src/app/shared/services/comparison-service';

import { Router } from '@angular/router'
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-best-offer',
  templateUrl: './best-offer.component.html',
  styleUrls: ['./best-offer.component.css']
})
export class BestOfferComponent implements OnInit {

  pharms =[];

  i=0;
  rate= false ;
  constructor(
    private pharmService: PharmsServices,
    private basketService: BasketService,
    private comparisonService: ComparisonService,
    private route : Router,
    public navbarCom: NavbarComponent
    ) {
    this.get();
   }

   get() {
     this.pharmService.getCat1().subscribe( res =>{
        this.pharms = res.json();
        console.log(this.pharms)
    });



   }

   addBasket(number) {
    this.i = this.basketService.i;
      this.basketService.object[this.i] = number;
      console.log(this.basketService.object[this.i]);
     this.basketService.i++;
      // this.i++;
      Swal.fire({
        type: 'success',
        title: 'Maxsulot savatga qo\'shildi',
        showConfirmButton: false,
        timer: 1000
      })

      this.navbarCom.updateCount(1)

   }


   comparison(id) {
    this.comparisonService.object[this.comparisonService.id] = id;
    console.log(this.comparisonService.object);
    this.comparisonService.id++;
    if (this.comparisonService.object.length == 2) {
        this.route.navigate(['/comparison']);
        this.comparisonService.id = 0;
    }

   }

   ngOnInit() {
  }

}
