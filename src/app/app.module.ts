import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CarServiceService } from './car/car-service.service';
import { CustomerServiceService } from './customer/customer-service.service';
import { OrderServiceService } from './order/order-service.service';

import { CarListComponent } from './car/car-list/car-list.component';
import { CarFormComponent } from './car/car-form/car-form.component';
import { CustomerListComponent } from './customer/customer-list/customer-list/customer-list.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form/customer-form.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderFormComponent } from './order/order-form/order-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarFormComponent,
    CustomerListComponent,
    CustomerFormComponent,
    OrderListComponent,
    OrderFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarServiceService, CustomerServiceService, OrderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
