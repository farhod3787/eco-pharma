import { Component, OnInit } from '@angular/core';
import { PharmsServices } from 'src/app/shared/services/pharms'
import { BasketService } from 'src/app/shared/services/basket-service';
import Swal from 'sweetalert2'
import { CategoryService } from 'src/app/shared/services/category';
@Component({
  selector: 'app-pharms',
  templateUrl: './pharms.component.html',
  styleUrls: ['./pharms.component.css']
})
export class PharmsComponent implements OnInit {

  categorys =[]
  pharms =[]

  categoryName : string
  i=0;
  b : any


  constructor(

    private pharmService: PharmsServices,
    private basketService: BasketService,
    private categoryService: CategoryService

  ) {
      this.get();
      this.getCategorys()
  }

  catName(name) {
      this.categoryName = name;
  }
  getCategorys() {
    this.categoryService.get().subscribe( res =>{
      this.categorys = res.json()
    })
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
