import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  private carsUrl: string;

  constructor(private http: HttpClient) {
    this.carsUrl = 'http://localhost:8085/cars-1.0-SNAPSHOT/car';
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  public getById(id: string): Observable<Car> {
    return this.http.get<Car>(this.carsUrl + '/' + id);
  }

  public save(car: Car) {
    return this.http.post<Car>(this.carsUrl, car);
  }

  public update(car: Car) {
    return this.http.put(this.carsUrl, car);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(this.carsUrl + '/' + id);
  }
}
