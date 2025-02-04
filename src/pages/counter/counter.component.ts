import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  deinrement() {
    this.counter--;
  }
}
