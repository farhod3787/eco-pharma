import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { BasketService } from 'src/app/shared/services/basket-service';
import Swal from 'sweetalert2'
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cat-pharms',
  templateUrl: './cat-pharms.component.html',
  styleUrls: ['./cat-pharms.component.css']
})
export class CatPharmsComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    private router : Router,
    private catService: CategoryService,
    private pharmService: PharmsServices,
    private basketService: BasketService,
    private navbarCom: NavbarComponent
  ) { }

   id: string;
    name: string;
    pharms = []
    i=0;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.id = paramMap.get("id");
        this.catService.getOne(this.id).subscribe( res =>{
          this.name = res.json().name;
          this.pharmService.getCat(this.name).subscribe( res =>{
            this.pharms = res.json()
          })
        })

      }
    })
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



}
