import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter-component',
  standalone: true,
  imports: [],
  templateUrl: './click-counter-component-component.html',
  styleUrl: './click-counter-component-component.css',
})
export class ClickCounterComponent {
  number = 0;
  increaseNumber(): void {
    console.log('Button clicked', this.number);
    this.number++;
    console.log('Button clicked', this.number);
  }
}
