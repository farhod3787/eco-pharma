import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';

import {AdminRoutingModule} from './admin-routing.module';
import { AdminPharmsComponent } from './admin-pharms/admin-pharms.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminAddPharmComponent } from './admin-add-pharm/admin-add-pharm.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminModeratorsComponent } from './admin-moderators/admin-moderators.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminOrdersSuccessComponent } from './admin-orders-success/admin-orders-success.component';
import { OrdersDoingComponent } from './orders-doing/orders-doing.component';
import { AdminPodCategoryComponent } from './admin-pod-category/admin-pod-category.component';
import { AdminRetseptComponent } from './admin-retsept/admin-retsept.component';
import { AdminRetseptTrueComponent } from './admin-retsept-true/admin-retsept-true.component';


@NgModule({
    declarations: [
        AdminComponent, 
        AdminLoginComponent,
        AdminHomeComponent,
        AdminPharmsComponent,
        AdminOrdersComponent,
        AdminAddPharmComponent,
        AdminCategoryComponent,
        AdminModeratorsComponent,
        AdminUsersComponent,
        AdminOrdersSuccessComponent,
        OrdersDoingComponent,
        AdminPodCategoryComponent,
        AdminRetseptComponent,
        AdminRetseptTrueComponent
    ],
    imports: [
      AdminRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
    ],
    providers: [
    
    ]
  })
  export class AdminModule {
  }