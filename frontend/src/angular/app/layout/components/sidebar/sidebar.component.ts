import { Component } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [MainMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
