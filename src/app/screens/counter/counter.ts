import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';

@Component({
  selector: 'app-counter',
  imports: [Title],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

}
