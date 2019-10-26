import { Component, OnInit } from '@angular/core';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { Pharm } from 'src/app/shared/models/pharm';
import { PersonService } from 'src/app/shared/services/person';
import { Router } from '@angular/router'
import { BasketService } from 'src/app/shared/services/basket-service';
import Swal from 'sweetalert2'
import { SearchService } from 'src/app/shared/services/search-service';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public a= 1;
  data = false;
  pharms : Pharm;
    q=0;
  constructor( 
    private pharmService: PharmsServices,
    private personService: PersonService,
    private router: Router,
    public basketservice: BasketService,
    private searchService: SearchService
    ) { 
      this.a = basketservice.i;
     
     
    }

    updateCount(q){
      if(q == 0){
        this.a = 0
      }
      else{
        this.a =  this.a + q
      }
    }

  ngOnInit() {
          this.verify();
 
        }
        
  search(body) {
        this.pharmService.getsearch({"name": body}).subscribe( result =>{
            this.pharms = result.json();
            this.searchService.object = this.pharms;
            // console.log(this.searchService.object);
        })

        this.router.navigate(['/search/' + body]);
  }

  verify () {
    this.personService.getVerify().subscribe( res =>{
        var obj = res.json();
        console.log(obj)
        if (obj.isUser) {
              this.data = true;
        }
    })
  }
  
  
  addUser(number, kod) {
    this.personService.post({number: number, kod: kod}).subscribe( res =>{
      var obj = res.json();
      localStorage.setItem('token', obj.token);
      this.data = true; 
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Siz tizmga kirdingiz!',
})
      window.location.reload();
    }) 
  }


 
}
