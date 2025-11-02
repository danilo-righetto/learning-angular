import { Component } from '@angular/core';
import { MenuItem } from "../menu-item/menu-item";

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
