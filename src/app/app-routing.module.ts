import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NavbarComponent} from './website/navbar/navbar.component';
import { HomeComponent} from './website/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPharmsComponent } from './admin/admin-pharms/admin-pharms.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminAddPharmComponent } from './admin/admin-add-pharm/admin-add-pharm.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminModeratorsComponent } from './admin/admin-moderators/admin-moderators.component';
import { AboutMeComponent } from './website/about-me/about-me.component';
import { PharmServiceComponent } from './website/pharm-service/pharm-service.component';
import { QuestionAnswerComponent } from './website/question-answer/question-answer.component';
import { OrderSiteComponent } from './website/order-site/order-site.component';
import { MyProfilComponent } from './website/users/my-profil/my-profil.component';
import { MyInformationComponent } from './website/users/my-information/my-information.component';
import { MyAddresComponent } from './website/users/my-addres/my-addres.component';
import { MyPharmsComponent } from './website/users/my-pharms/my-pharms.component';
import { MyShouldComponent } from './website/users/my-should/my-should.component';
import { MyOrdersComponent } from './website/users/my-orders/my-orders.component';
import { PharmsComponent } from './website/pharms/pharms.component';
import { AboutPharmsComponent } from './website/about-pharms/about-pharms.component';
import { BasketComponent } from './website/basket/basket.component';
import { WarrantyComponent } from './website/warranty/warranty.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { OrderPharmComponent } from './website/order-pharm/order-pharm.component';
import { AdminOrdersSuccessComponent } from './admin/admin-orders-success/admin-orders-success.component';
import { OrdersDoingComponent } from './admin/orders-doing/orders-doing.component';
import { SearchComponent } from './website/search/search.component';
import { ComparisonComponent } from './website/comparison/comparison.component';
import { AdminPodCategoryComponent } from './admin/admin-pod-category/admin-pod-category.component';
import { AdminRetseptComponent } from './admin/admin-retsept/admin-retsept.component';
import { AdminRetseptTrueComponent } from './admin/admin-retsept-true/admin-retsept-true.component';



const routes: Routes = [
  { path: 'login', component: AdminLoginComponent},

    {
      path: 'admin',
    //   loadChildren: './admin/admin.module#AdminModule'
        component:  AdminComponent, children : [
            { path: '', component: AdminHomeComponent},
            { path: 'pharms', component: AdminPharmsComponent},
            { path: 'orders', component: AdminOrdersComponent },
            { path: 'orders-success', component: AdminOrdersSuccessComponent},
            { path: 'orders-doing', component: OrdersDoingComponent},
            { path: 'add-pharm', component: AdminAddPharmComponent},
            { path: 'update/:id', component: AdminAddPharmComponent},
            { path: 'category', component: AdminCategoryComponent},
            { path : 'moderators', component: AdminModeratorsComponent},
            { path: 'users', component: AdminUsersComponent},
            { path: 'pod-category', component: AdminPodCategoryComponent},
            { path: 'retsept', component: AdminRetseptComponent},
            { path: 'retsepts-true', component: AdminRetseptTrueComponent}
        ]
    },
    {
      path : "", component : NavbarComponent, children: [
        { path: "", component: HomeComponent},
        { path: "about", component: AboutMeComponent},
        { path: 'pharm-service', component: PharmServiceComponent},
        { path: 'question-answer', component: QuestionAnswerComponent},
        { path: 'order-site', component: OrderSiteComponent},
        { path: 'my-profil', component: MyProfilComponent, children: [
          { path : '', component : MyInformationComponent},
          { path : 'my-adress', component: MyAddresComponent},
          { path : 'my-pharms', component: MyPharmsComponent},
          { path : 'my-should', component: MyShouldComponent},
          { path : 'my-orders', component: MyOrdersComponent}
        ]},
        { path: 'pharms', component: PharmsComponent},
        { path: 'about-pharm/:id', component: AboutPharmsComponent},
        { path: 'basket', component: BasketComponent},
        { path: 'warranty', component: WarrantyComponent},
        { path: 'order-pharm', component: OrderPharmComponent},
        { path: 'search/:name', component: SearchComponent},
        { path: 'comparison', component : ComparisonComponent}

        ]
    },
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

