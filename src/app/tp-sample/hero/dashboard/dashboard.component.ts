import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from '../hero-service/hero.service';
import { Hero } from '../hero-model/Hero';



@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../app.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}