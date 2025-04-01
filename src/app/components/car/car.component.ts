import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../Car';

@Component({
  selector: 'app-car',
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  car: Car = {} as Car;
}
