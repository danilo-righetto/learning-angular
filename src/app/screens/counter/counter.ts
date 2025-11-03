import { Component, signal } from '@angular/core';
import { Title } from '../../components/shared/title/title';

@Component({
  selector: 'app-counter',
  imports: [Title],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  /* Trabalhando com estados no Angular */
  count = signal(0);

  increment() {
    /* update = atualiza o valor de uma variavel através de uma função */
    this.count.update((n) => n + 1);
  }

  decrement() {
    this.count.update((n) => n - 1);
  }

  reset() {
    this.count.set(0);
  }
}
