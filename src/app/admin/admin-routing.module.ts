import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminLoginComponent} from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';
import { AdminPharmsComponent } from './admin-pharms/admin-pharms.component';

const routes: Routes = [
    
      ]
     
  ;
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {
  }