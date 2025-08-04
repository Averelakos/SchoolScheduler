import { NgFor } from '@angular/common'
import { Component, Signal } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { IconComponent } from '../../../common/components/icon.component'
import { Menu } from '../../../core/models/menu'
import { MenuService } from '../../../core/services/menu.service'

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
