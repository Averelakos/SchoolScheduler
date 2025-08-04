import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'scheduler', pathMatch: 'full' },
      {
        path: 'scheduler',
        loadComponent: () =>
          import('./modules/scheduler/scheduler.component').then(
            (c) => c.SchedulerComponent
          )
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./modules/dashboard/dashboard.component').then(
            (m) => m.DashboarComponent
          )
      }
    ]
  }
]
