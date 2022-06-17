import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerServiceService } from '../../customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerServiceService) {}

  ngOnInit(): void {
    this.customerService.findAll().subscribe((data) => {
      this.customers = data;
    });
  }
}
