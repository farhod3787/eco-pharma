import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders'
import { OrderPharmService } from 'src/app/shared/services/order-pharm';
import { PharmsServices } from 'src/app/shared/services/pharms';
import Swal from 'sweetalert2'
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {


   pharms = [];
   rate =[]
  // pharms = [ [], [] ];
  // rate=[[], [] ];

  farm = [ [] ,[] ];
  son =[ [], []];
 w=0
  orders = [];
  // q:any
  constructor(
    private srv: OrdersService,
    private orderService: OrderPharmService,
    private pharmService: PharmsServices,
    private appService : AppService
    ) { 
      this.getall()

      
  }


  getall() {

    this.srv.get().subscribe( (res) =>{
      var obj = res.json();
    
      // this.orderService.mas = this.orders;
   
      if( this.orders.length<obj.length) {
        this.orders = obj;
          
      for ( let i=0; i<this.orders.length; i++) {
        this.pharms[i] = []
      } 
      for (let i=0; i<this.orders.length; i++) {
        this.rate[i] =[]
      }

      for (let i=0; i<=this.orders.length-1; i++) {

        // let index=0;

          // for (let j=0; j<=this.orders[i].pharms.length-1; j=j+2) {
          //         let pharmId = this.orders[i].pharms[j]
          //         this.pharmService.getPharm(pharmId).subscribe( res =>{
          //           this.pharms[i][index] = res.json();    

          //         this.rate[i][index] = this.orders[i].pharms[j+1];
          //         index++;
          //        }, error =>{
          //          console.log("Error   "  + error)
          //        })
          // }

          for (let j=0; j<=this.orders[i].pharms.length-1; j++) {
            let pharmsId = this.orders[i].pharms[j];
            this.pharmService.getPharm(pharmsId).subscribe( res =>{
              this.pharms[i][j] = res.json();
              this.rate[i][j] = this.orders[i].how[j];
            })
          } 

          

      }
        this.appService.playSound();
      } 
      
    })    

  }

 

  accept(id, body) {
    this.srv.update(id, body).subscribe( (res) =>{
      if(res) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'Buyurtma qabul qilindi!',
  })
        this.getall();
      }
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Serverda xatolik' 
        })
      }
    })
    
  }


  delete(id) {
    this.srv.delete(id).subscribe( res =>{
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Buyurtma o\'chirildi',
})
      this.getall();
    })
  }




  ngOnInit() {
    setInterval(
      ()=>{
      this.getall()
       
  
      // window.location.reload() 
      },3000)
   

  }

}
