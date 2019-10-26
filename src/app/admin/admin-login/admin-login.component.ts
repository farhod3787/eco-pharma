import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private srv: AuthService, private router: Router) { }

  ngOnInit() {
  }


  signIn(login, password) {
      this.srv.postLogin({login: login, password: password}).subscribe( result =>{
        var obj = result.json();
        if(obj.isAdmin || obj.isModerator){
          Swal.fire({
            type: 'success',
            title: 'Done',
            text: 'Admin Hush kelibsiz!',
    })
          localStorage.setItem("token", obj.token);
          this.router.navigate(['admin']);
        }
        else {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Login yoki parol xato',
            footer: 'Iltimos tekshirib qaytadan tering  '
    })
        }
      })
  }

}
