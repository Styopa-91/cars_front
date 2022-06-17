import { Order } from '../order/order';

export class Customer {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  orders?: Array<any>;
}
