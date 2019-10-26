import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/shared/services/basket-service';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { OrderPharmService } from 'src/app/shared/services/order-pharm';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  a = 0;
  pharms = []
  id
  price
  rate: any
  num;
  number = []
  dis = false
  q = 1;
  ordersnum = [];
  orderssum = [];
  i = 0
  j = 0;
  values = [1];

  w: Number;
  d: any;

  soni = [];

  constructor(
    private basketService: BasketService,
    private pharmService: PharmsServices,
    private orderService: OrderPharmService
  ) {
    this.getbasket();
    this.getpharm();
  }


  getbasket() {
    this.id = this.basketService.obj.id;
    this.price = this.basketService.obj.price;

  }
  getpharm() {
    this.number = this.basketService.object;
    for (let i = 0; i < this.number.length; i++) {
      this.soni[i] = [];
    }
    for (let i = 0; i <= this.number.length - 1; i++) {
      this.pharmService.getPharm(this.number[i]).subscribe(res => {
        this.pharms[i] = res.json();

        for (let j = 0; j <= this.pharms[i].rate; j++) {
          this.soni[i][j] = j;
        }

      })
    }
  }


  add(a, b, c) {
    console.log(a);
    this.d = a * b;
    this.ordersnum[this.j] = this.d;
     this.orderService.testrate[this.i] = a;
    this.orderService.num[this.i] = c;
    // this.orderService.num[this.i + 1] = a;

    // this.i = this.i + 2;
    this.i++;
    this.j++;
    //  console.log("ordersnum");
    //  console.log(this.ordersnum);
    this.dis = true


    // Swal.fire({
    //   position: 'top-end',
    //   type: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1000
    // })

  }

  myfunk() {
    function getSum(total, num) {
      return total + num;
    }
    this.w = this.ordersnum.reduce(getSum);
    console.log(this.ordersnum.reduce(getSum))
    //  for (let i=0; i<=this.ordersnum.length-1; i++) {
    //       this.w += this.ordersnum[i];
    //       console.log(this.ordersnum[i])
    //  }

    console.log("SUMMA : ");
    console.log(this.w);
    this.orderService.id = this.pharms;
    this.orderService.sum = this.w;
    this.orderService.ana = this.ordersnum;
    // this.orderService.rate = this.ordersnum;
    console.log("Summa 2 :")
    console.log(this.orderService.sum)
  }



  min() {
    this.q--
  }
  plus() {
    this.q++;
  }




  ngOnInit() {




  }

}
