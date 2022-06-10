import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private ordersUrl: string;

  constructor(private http: HttpClient) {
    this.ordersUrl = 'http://localhost:8080/cars/order';
  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  public save(order: Order) {
    return this.http.post<Order>(this.ordersUrl, order);
  }

  public update(order: Order) {
    return this.http.put(this.ordersUrl, order);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(this.ordersUrl + "/" + id);
  }
}