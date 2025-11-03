import { effect, Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todo>>([]);

  readonly items = this._items.asReadonly();

  constructor() {
    this._load();

    /* Atualiza os itens no localStorage sempre que os itens são modificados */
    effect(() => {
      const items = this._items();
      localStorage.setItem('todos', JSON.stringify(items));
    })
  }

  add(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };
    this._items.update((items) => [...items, newTodo]);
  }

  toggle(id: string) {
    this._items.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  remove(id: string) {
    this._items.update((items) => items.filter((item) => item.id !== id));
  }

  private _load() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this._items.set(JSON.parse(storedTodos));
    } else {
      this._items.set([
        { id: crypto.randomUUID(), title: 'Implementar App Mobile', completed: false },
        { id: crypto.randomUUID(), title: 'Estudar Angular Avançado', completed: true },
        { id: crypto.randomUUID(), title: 'Revisar Código do Projeto', completed: false }
      ]);
    }
  }
}
