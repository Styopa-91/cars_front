import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Customer } from 'src/app/customer/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from '../order-service.service';
import { CustomerServiceService } from 'src/app/customer/customer-service.service';
@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  order: Order;
  customers: Customer[] = [];

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private orderService: OrderServiceService,
    private customerService: CustomerServiceService) {
    this.order = new Order();
         }
        
ngOnInit() {
    this.customerService.findAll().subscribe(data => {
      this.customers = data;
    });
  }

  
onSubmit() {
    this.orderService.save(this.order).subscribe(result => this.gotoOrderList());
  }
  
  gotoOrderList() {
    this.router.navigate(['/order']);
  }
}
