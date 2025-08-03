import { computed, Injectable, signal } from "@angular/core";
import { Menu } from "../models/menu";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class MenuService {
    private menuItems = signal<Menu[]>([
        {
        label: 'Scheduler',
        route: 'scheduler',
        icon: 'scheduler'
        },
        {
        label: 'Dashboard',
        route: 'dashboard',
        icon: 'dashboard'
        }
    ])

    // Compute signal for the menu state
    menuState = computed(() => this.menuItems())

    constructor(private router: Router) {}
}