import { Component } from '@angular/core';
import { Car } from '../../Car';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  car: Car = {} as Car;

  cars: Car[] = [];
}
