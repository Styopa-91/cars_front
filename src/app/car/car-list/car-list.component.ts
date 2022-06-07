import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService: CarServiceService) { }

  ngOnInit() {
     this.carService.findAll().subscribe(data => {
      this.cars = data;
    });
  }

}
