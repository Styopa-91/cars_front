import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarServiceService } from '../car-service.service';
import { OrderServiceService } from '../../order/order-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/order/order';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  orderService!: OrderServiceService;
  order!: Order;
 

  constructor(private router: Router,
    private carService: CarServiceService) { }

   public deleteCar(id: string) {
     this.carService.delete(id).subscribe(result => this.ngOnInit());
  }

  onSubmit(id: string) {
    this.orderService.save(this.order).subscribe(result => this.gotoOrderList());
  }

   gotoOrderList() {
    this.router.navigate(['/order']);
  }
  ngOnInit() {
     this.carService.findAll().subscribe(data => {
      this.cars = data;
    });
  }

 

}
