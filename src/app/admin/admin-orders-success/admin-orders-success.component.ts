import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders';
import Swal from 'sweetalert2'
import { PharmsServices } from 'src/app/shared/services/pharms';


@Component({
  selector: 'app-admin-orders-success',
  templateUrl: './admin-orders-success.component.html',
  styleUrls: ['./admin-orders-success.component.css']
})
export class AdminOrdersSuccessComponent implements OnInit {
  orders = [];
  // pharms = [ [], []]
  // rate = [[], []];
  pharms = [];
  rate = [];
  constructor(
    private orderService: OrdersService,
    private pharmService: PharmsServices
    ) {
    this.get();
   }

   get() {
     this.orderService.getsuccess().subscribe( res =>{
       this.orders = res.json();

       for ( let i=0; i<this.orders.length; i++) {
        this.pharms[i] = []
      } 
      for (let i=0; i<this.orders.length; i++) {
        this.rate[i] =[]
      }


      for (let i=0; i<=this.orders.length-1; i++) {

        // let index=0;

        //   for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {
        //           let pharmId = this.orders[i].pharms[j]
        //           this.pharmService.getPharm(pharmId).subscribe( res =>{
        //             this.pharms[i][index] = res.json();    

        //           this.rate[i][index] = this.orders[i].pharms[j+1];
        //           index++;
        //          }, error =>{
        //            console.log("Error   "  + error)
        //          })
        //   }

        for (let j=0; j<=this.orders[i].pharms.length-1; j++) {
          let pharmsId = this.orders[i].pharms[j];
          this.pharmService.getPharm(pharmsId).subscribe( res =>{
            this.pharms[i][j] = res.json();
            this.rate[i][j] = this.orders[i].how[j];
          })
        } 



      }


      //  for (let i=0; i<=this.orders.length-1; i++) {
      //   let q=0;
      //     for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {

      //            this.pharmService.getPharm(this.orders[i].pharms[j]).subscribe( res =>{
      //             this.pharms[i][q] = res.json();
      //             this.rate[i][q] = this.orders[i].pharms[j+1];
      //             q++;
      //            })
      //     }
      // }


     })
   }

   delete(id) {
     this.orderService.delete(id).subscribe( res =>{
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Buyurtma o\'chirildi!',
})
       this.get();
     })
   }

  ngOnInit() {
  }

}
