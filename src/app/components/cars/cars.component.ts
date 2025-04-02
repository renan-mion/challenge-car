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

  saveCar() {
    this.car.id = this.cars.length + 1;
    console.log(this.car);
    this.cars.push(this.car)
    this.car = {} as Car;
  }
}
