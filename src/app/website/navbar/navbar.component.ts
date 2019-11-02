import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PharmsServices } from 'src/app/shared/services/pharms';
import { Pharm } from 'src/app/shared/models/pharm';
import { PersonService } from 'src/app/shared/services/person';
import { Router } from '@angular/router'
import { BasketService } from 'src/app/shared/services/basket-service';
import Swal from 'sweetalert2'
import { SearchService } from 'src/app/shared/services/search-service';
import { RetseptService } from 'src/app/shared/services/retsept-service';
import { CategoryService } from 'src/app/shared/services/category';

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
  form: FormGroup;
  categorys = []
    q=0;
  constructor(
    private pharmService: PharmsServices,
    private personService: PersonService,
    private router: Router,
    public basketservice: BasketService,
    private searchService: SearchService,
    private resteptService: RetseptService,
    private categoryService : CategoryService
    ) {
      this.a = basketservice.i;
      this.getCategory()


    }

    getCategory() {
      this.categoryService.get().subscribe( res => {
        this.categorys = res.json()
      })
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

    this.form = new FormGroup({
      number: new FormControl(null, {
              validators: [Validators.required]
      }),
      image: new FormControl(null, { validators: [Validators.required] })
    }
  )

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

  retsept() {
    this.resteptService.post(this.form.value.number, this.form.value.image).subscribe( res => {
      if (res) {
        alert("AAA")
      }
      else { alert("BB")}
    })
  }




}
