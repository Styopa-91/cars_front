import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarFormComponent } from './car/car-form/car-form.component';
import { CustomerListComponent } from './customer/customer-list/customer-list/customer-list.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form/customer-form.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderFormComponent } from './order/order-form/order-form.component';

const routes: Routes = [
  { path: 'car', component: CarListComponent },
  { path: 'addcar', component: CarFormComponent },
  { path: 'car/:id/edit', component: CarFormComponent },
  { path: 'customer', component: CustomerListComponent },
  { path: 'addcustomer', component: CustomerFormComponent },
  { path: 'customer/:id/view', component: CustomerViewComponent },
  { path: 'order', component: OrderListComponent },
  { path: 'addorder/:carId', component: OrderFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
