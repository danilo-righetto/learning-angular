import { Component, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TodosService } from '../../services/todos.service';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-todos',
  imports: [Title, MatIconModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  /* Injetando o serviço no componente */
  readonly todos = inject(TodosService);

  /* Adicionando o Evento e o elemento HTML */
  addTodo(event: Event, input: HTMLInputElement) {
    event.preventDefault();
    
    const title = input.value.trim();
    if (!title) return;

    this.todos.add(title);
    input.value = '';
  }
}
