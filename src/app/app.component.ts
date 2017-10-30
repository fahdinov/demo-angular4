import { Component } from '@angular/core';
import { HeroService } from './tp-sample/hero/hero-service/hero.service';
import { OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/angular-calendar/dist/css/angular-calendar.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Trade Portal';
}
export class Hero {
  id: number;
  name: String;
}

