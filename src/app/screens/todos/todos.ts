import { Component, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TodosService } from '../../services/todos.service';
@Component({
  selector: 'app-todos',
  imports: [Title],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  /* Injetando o serviço no componente */
  readonly todos = inject(TodosService);
}
