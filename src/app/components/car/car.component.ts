import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../Car';

@Component({
  selector: 'app-car',
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  @Input()
  car: Car = {} as Car;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }
}
