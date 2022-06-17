import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';
import { Car } from '../car';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent {
  id: any;
  form!: FormGroup;
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarServiceService
  ) {
    this.car = new Car();
    // @ts-ignore
    // this.car.id = this.route.snapshot.paramMap.get('carId');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id) {
      this.carService.getById(this.id).subscribe((data) => {
        this.car = data;
      });
    }
  }

  onSubmit() {
    var response = this.id
      ? this.carService.update(this.car).subscribe(() => this.gotoCarList())
      : this.carService.save(this.car).subscribe(() => this.gotoCarList());
  }

  public updateCar(car: Car) {
    this.carService.update(car).subscribe(() => this.gotoCarList());
  }

  gotoCarList() {
    this.router.navigate(['/car']);
  }
}
