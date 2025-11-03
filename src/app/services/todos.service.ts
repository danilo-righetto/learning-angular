import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: 'Implementar App Mobile', completed: false },
    { id: crypto.randomUUID(), title: 'Estudar Angular Avançado', completed: true },
    { id: crypto.randomUUID(), title: 'Revisar Código do Projeto', completed: false }
  ]);

  readonly items = this._items.asReadonly();

  toggle(id: string) {
    this._items.update((items) => 
      items.map((item) => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }
}
