import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:'',redirectTo:'scheduler', pathMatch:'full'},
      { path: 'scheduler', loadComponent: () => import('./modules/scheduler/scheduler.component').then(c => c.SchedulerComponent) },
      // { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
    ]
  }
]
