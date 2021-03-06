import { Car } from '../car/car';
import { Customer } from '../customer/customer';

export class Order {
  id: string;
  description: string;
  createdAt!: Date;
  customer: Customer;
  car: Car;

  constructor() {
    this.id = '';
    this.customer = { id: '' };
    this.description = '';
    this.car = { id: '' };
  }
}
