import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Customer } from 'src/app/customer/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from '../order-service.service';
import { CustomerServiceService } from 'src/app/customer/customer-service.service';
import { NgForm } from '@angular/forms';
import { CarServiceService } from '../../car/car-service.service';
import { Car } from 'src/app/car/car';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  order: Order;
  customers: Customer[] = [];
  car: Car = { id: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderServiceService,
    private customerService: CustomerServiceService,
    private carService: CarServiceService
  ) {
    this.order = new Order();

    // @ts-ignore
    this.order.car.id = this.route.snapshot.paramMap.get('carId');
  }

  ngOnInit() {
    this.customerService.findAll().subscribe((data) => {
      this.customers = data;
    });
  }

  onSubmit() {
    console.log(this.order);
    this.orderService.save(this.order).subscribe(() => this.gotoOrderList());
  }

  gotoOrderList() {
    this.router.navigate(['/order']);
  }
}
