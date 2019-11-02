import { Component, OnInit } from '@angular/core';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { BasketService } from 'src/app/shared/services/basket-service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-with-sale',
  templateUrl: './with-sale.component.html',
  styleUrls: ['./with-sale.component.css']
})
export class WithSaleComponent implements OnInit {
  pharms = [];
  i=0;
  constructor(
    private pharmService: PharmsServices,
    private basketService: BasketService
    ) {
    // this.get();
   }
 
  ngOnInit() {
  }


  addBasket(number) {
    this.i = this.basketService.i;
    // console.log(number);
    this.basketService.object[this.i] = number;
    console.log(this.basketService.object[this.i]);
    this.basketService.i++;

    Swal.fire({
      type: 'success',
      title: 'Maxsulot savatga qo\'shildi',
      showConfirmButton: false,
      timer: 1000
    })

    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 1400
    // });
    
    // Toast.fire({
    //   type: 'success',
    //   title: name + '  Korzinkaga qo\'shildi'
    // })


 }

}
