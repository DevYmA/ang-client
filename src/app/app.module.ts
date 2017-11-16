import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { ItemComponent } from './item/item.component';

import { CustomerService } from './services/customer.service';  
import { OrdersService } from './services/orders.service'; 

import  { appRouters } from '../router';
import { OrdersComponent } from './orders/orders.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomerComponent,
    ItemComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [
    CustomerService,
    OrdersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
