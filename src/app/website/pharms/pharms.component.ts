import { Component, OnInit } from '@angular/core';
import { PharmsServices } from 'src/app/shared/services/pharms'
import { BasketService } from 'src/app/shared/services/basket-service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-pharms',
  templateUrl: './pharms.component.html',
  styleUrls: ['./pharms.component.css']
})
export class PharmsComponent implements OnInit {


  pharms =[]

  i=0;
  b : any

  constructor(

    private pharmService: PharmsServices,
    private basketService: BasketService

  ) { 
      this.get()
  }


  get() {
    this.pharmService.get().subscribe( res =>{
       this.pharms = res.json();
       

   })
  }

  addBasket(number) {
   
    this.i = this.basketService.i;
      this.basketService.object[this.i] = number;
      console.log(this.basketService.object[this.i]);
     this.basketService.i++;
      this.b = this.basketService.i
      localStorage.setItem('id', this.b);

      // this.i++;
      Swal.fire({
        type: 'success',
        title: 'Maxsulot savatga qo\'shildi',
        showConfirmButton: false,
        timer: 1000
      })

   }


  ngOnInit() {
  }

}
