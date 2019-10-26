import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 
import { AuthService } from 'src/app/shared/services/auth-service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.css']
})
export class MyProfilComponent implements OnInit {

  allow = false;

  constructor(
    private router: Router,
    private authSvc: AuthService
    ) { }

  ngOnInit() {
    this.authVerify()
  }

  logOut() {
    localStorage.removeItem("token");
    window.location.reload()
    this.router.navigate(['/about']);
  }

  authVerify(){
    this.authSvc.getPerson().subscribe((result)=>{
      var object = result.json();
      if( !object.isUser){
        Swal.fire({
          type: 'error',
          title: 'Done',
          text: 'Siz tizimdan chiqdingiz',
  })
        this.router.navigate(['/'])
      }
      else{
        this.allow = true;
      }
    },(err)=>{
      this.router.navigate(['/my-profil']); 
    })
  }

}
