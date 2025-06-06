import { Component } from '@angular/core';
import { Car } from '../../Car';
import { CommonModule } from '@angular/common';
import { CarComponent } from "../car/car.component";

@Component({
  selector: 'app-cars',
  imports: [CommonModule, CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  car: Car = {} as Car;

  cars: Car[] = [];

  isUpdate: boolean = false;

  saveCar() {
    if (!this.isUpdate) {
      this.car.id = this.cars.length + 1;
      this.cars.push(this.car)
    }

    this.car = {} as Car;
    this.isUpdate = false;
  }

  updateCar(selectedCar: Car) {
    this.car = selectedCar;
    this.isUpdate = true;
  }

  removeCar(selectedCar: Car) {
    this.cars = this.cars.filter(c => c !== selectedCar);

    for(var cont = 0; cont < this.cars.length; cont++) {
      this.cars[cont].id = cont + 1;
    }

    this.car = {} as Car;
  }
}
