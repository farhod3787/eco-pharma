import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { MDBBootstrapModule, DropdownModule, TableModule  } from 'angular-bootstrap-md';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxMaskModule} from 'ngx-mask'

import { 
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule, 
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatSelectModule
} from '@angular/material';

// import { MatTableDataSource}  from '@angular/material/table'

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminPharmsComponent} from './admin/admin-pharms/admin-pharms.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component'
import { NavbarComponent } from './website/navbar/navbar.component';
import { HomeComponent } from './website/home/home.component';
import { AdminAddPharmComponent } from './admin/admin-add-pharm/admin-add-pharm.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminModeratorsComponent } from './admin/admin-moderators/admin-moderators.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component'
import { AdminOrdersSuccessComponent } from './admin/admin-orders-success/admin-orders-success.component'
import { OrdersDoingComponent } from './admin/orders-doing/orders-doing.component'
import { BestOfferComponent } from './website/home/best-offer/best-offer.component';
import { WithSaleComponent } from './website/home/with-sale/with-sale.component';
import { FooterComponent } from './website/footer/footer.component';
import { ImportPharmComponent } from './website/home/import-pharm/import-pharm.component';
import { AboutMeComponent } from './website/about-me/about-me.component';
import { PharmServiceComponent } from './website/pharm-service/pharm-service.component';
import { QuestionAnswerComponent } from './website/question-answer/question-answer.component';
import { OrderSiteComponent } from './website/order-site/order-site.component';
import { MyProfilComponent } from './website/users/my-profil/my-profil.component';
import { MyAddresComponent } from './website/users/my-addres/my-addres.component';
import { MyInformationComponent } from './website/users/my-information/my-information.component';
import { MyPharmsComponent } from './website/users/my-pharms/my-pharms.component';
import { MyShouldComponent } from './website/users/my-should/my-should.component';
import { MyOrdersComponent } from './website/users/my-orders/my-orders.component';
import { PharmsComponent } from './website/pharms/pharms.component';
import { AboutPharmsComponent } from './website/about-pharms/about-pharms.component';
import { BasketComponent } from './website/basket/basket.component';
import { DeliveryComponent } from './website/delivery/delivery.component';
import { WarrantyComponent } from './website/warranty/warranty.component';
import { LanguageComponent } from './website/language/language.component';
import { OrderPharmComponent } from './website/order-pharm/order-pharm.component';
import { SearchComponent } from './website/search/search.component';
import { ComparisonComponent } from './website/comparison/comparison.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminPharmsComponent,
    AdminOrdersComponent,
    NavbarComponent,
    HomeComponent,
    AdminAddPharmComponent,
    AdminCategoryComponent,
    AdminModeratorsComponent,
    AdminUsersComponent,
    AdminOrdersSuccessComponent,
    OrdersDoingComponent,
    BestOfferComponent,
    WithSaleComponent,
    FooterComponent,
    ImportPharmComponent,
    AboutMeComponent,
    PharmServiceComponent,
    QuestionAnswerComponent,
    OrderSiteComponent,
    MyProfilComponent,
    MyAddresComponent,
    MyInformationComponent,
    MyPharmsComponent,
    MyShouldComponent,
    MyOrdersComponent,
    PharmsComponent,
    AboutPharmsComponent,
    BasketComponent,
    DeliveryComponent,
    WarrantyComponent,
    LanguageComponent,
    OrderPharmComponent,
    SearchComponent,
    ComparisonComponent
  ],
  
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    DropdownModule.forRoot(),
    TableModule,
    AppRoutingModule ,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }) 
  ],
 
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
