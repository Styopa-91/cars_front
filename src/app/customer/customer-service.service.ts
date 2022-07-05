import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  private customersUrl: string;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8085/cars-1.0-SNAPSHOT/customer';
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }

  public getById(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.customersUrl + '/' + id);
  }

  public save(customer: Customer) {
    return this.http.post<Customer>(this.customersUrl, customer);
  }
}
