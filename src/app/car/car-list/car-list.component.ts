import { Component, OnInit, TemplateRef } from '@angular/core';
import { Car } from '../car';
import { CarServiceService } from '../car-service.service';
import { OrderServiceService } from '../../order/order-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/order/order';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  orderService!: OrderServiceService;
  order!: Order;
  modalRef!: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private carService: CarServiceService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(id: string): void {
    this.carService.delete(id).subscribe(() => this.ngOnInit());
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  ngOnInit() {
    this.carService.findAll().subscribe((data) => {
      this.cars = data;
    });
  }
}
