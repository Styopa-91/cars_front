import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderServiceService } from '../order-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];

  constructor(private router: Router,
    private orderService: OrderServiceService) { }
  
  public deleteOrder(id: string) {
     this.orderService.delete(id).subscribe(result => this.ngOnInit());
  }

  ngOnInit() {
    this.orderService.findAll().subscribe(data => {
      this.orders = data;
    });
  }

}
