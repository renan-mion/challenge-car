import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CarsComponent } from './components/cars/cars.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CarsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
