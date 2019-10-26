import { Component, OnInit } from '@angular/core';
import { ModeratorsServices } from 'src/app/shared/services/moderators';

@Component({
  selector: 'app-admin-moderators',
  templateUrl: './admin-moderators.component.html',
  styleUrls: ['./admin-moderators.component.css']
})
export class AdminModeratorsComponent implements OnInit {

  moderators = [];
  number ="1";
  constructor( private moderatorService: ModeratorsServices) { 
      this.get();
   }

   get(){
        this.moderatorService.get().subscribe( res =>{
            this.moderators = res.json();
            console.log(this.moderators)
        })
   }

   add(login, password, email) {
      this.moderatorService.post({login: login, password: password, email: email, number: this.number}).subscribe( err =>{
         alert("New Moderator Added");
         this.get();
      })
   }

   delete(id) {
     this.moderatorService.delete(id).subscribe( err =>{
        alert("Moderator Deleted");   
        this.get();
    })
   }

  ngOnInit() {
  }

}
