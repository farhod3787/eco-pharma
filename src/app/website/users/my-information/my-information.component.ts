import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/shared/services/person';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.css']
})
export class MyInformationComponent implements OnInit {

  person = [];
  id;
  constructor(private personService: PersonService) {
      this.get();
   }

   get() {
     this.personService.getPerson().subscribe( res =>{
        this.person = res.json(); 
        this.id = this.person[0]._id;  
        console.log(this.person)
    })
   }

   update(name, lastname) {
     this.personService.update({name: name, lastname: lastname}, this.id).subscribe( res =>{
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Ma\'lumotlar o\'zgartirildi!',
})
      window.location.reload();

    })
   }

  ngOnInit() {
  }

}
