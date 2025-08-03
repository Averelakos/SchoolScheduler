import { Component, Signal } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { Menu } from '../../../core/models/menu';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../../common/components/icon.component';


@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  menuItems: Signal<Array<Menu>>
  constructor(private menuService: MenuService) {
    this.menuItems = menuService.menuState
  }
}
