import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-hello-signals',

  standalone: true,
  imports: [FormsModule],
  templateUrl: './hello-signals.component.html',
  styleUrl: './hello-signals.component.css'
})
export class HelloSignalsComponent {
  readonly counter = signal(0);
  readonly numbers = signal<number[]>([]);
  readonly lengthOfNumbers = computed(() => this.numbers().length);
  readonly magicNumber = signal(42);


  constructor() {
    effect (() => {
      console.log('counter:', this.counter());
    });

    this.counter.set(42);
    this.numbers.set([]);
    setInterval(() => {
      this.counter.update(value => value + 1);
      this.numbers.update(value => [...value, this.counter()]);

    }, 1000);
  }
}
