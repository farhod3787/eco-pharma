import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { PersonService } from 'src/app/shared/services/person';
declare var $: any;

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  orders = [];
  q
  pharms = [];
  a
  persons = [];
  c
    constructor( 
    private orderService: OrdersService,
    private pharmService: PharmsServices,
    private personService: PersonService
    ) {
      this.getOrders();
      this.getPharms();
      this.getPersons();
     }

     getOrders() {
       this.orderService.get().subscribe( all =>{
         this.orders = all.json()
         this.q = this.orders.length;
       })
     }

     getPharms() {
       this.pharmService.get().subscribe( all =>{
         this.pharms = all.json();
         this.a = this.pharms.length;
       })
     }

     getPersons() {
       this.personService.get().subscribe( all =>{
         this.persons =all.json();
         this.c = this.persons.length;
       })
     }

  public ngOnInit() {

    setInterval(
      ()=>{
      this.getOrders();
      // if(this.q)
      // window.location.reload() 
      },10000)


    $(document).on('click', 'a.scroll-to-top', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
      }, 1000, 'easeInOutExpo');
      e.preventDefault();
    });
  }

}
