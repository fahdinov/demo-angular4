import { RouterModule }   from '@angular/router';
import { Route }   from '@angular/router';

import { HeroListeComponent } from './hero-liste/heroes-components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-details.component';


export const ROUTES = RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroListeComponent
  },
	{
	  path: 'dashboard',
	  component: DashboardComponent
	},
	{
	  path: 'detail/:id',
	  component: HeroDetailComponent
	},
	{
	  path: '',
	  redirectTo: '/dashboard',
	  pathMatch: 'full'
	}
]);

