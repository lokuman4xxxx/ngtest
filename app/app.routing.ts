import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

export const appRoutes: Routes = [
  { path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);