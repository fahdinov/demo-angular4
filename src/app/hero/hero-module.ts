import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { HeroDetailComponent } from './hero-detail/hero-details.component';
import { HeroListeComponent } from './hero-liste/heroes-components'
import { ROUTES } from './hero.routing';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroListeComponent,
    DashboardComponent
  ],
  exports: [
    HeroDetailComponent,
    HeroListeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ROUTES
  ],
  //  exports: [HeroModule],
  providers: []
})
export class HeroModule { }
