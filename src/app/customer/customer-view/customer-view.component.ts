import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css'],
})
export class CustomerViewComponent implements OnInit {
  id!: string;
  customer!: Customer;

  constructor(
    public customerService: CustomerServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customerService.getById(this.id).subscribe((data) => {
      this.customer = data;
    });
  }
}
