import {Component} from '@angular/core';
import { OnInit } from '@angular/core';


import {HeroService} from '../hero-service/hero.service';
import {Hero} from '../hero-model/Hero';


@Component({
  selector: 'hero-list',
  templateUrl: './heroes.html',
  styleUrls: ['../../../app.component.css'],
  providers:[HeroService]
})
export class HeroListeComponent implements OnInit {
	constructor(private heroDataService: HeroService){

	}
	ngOnInit(): void {
    	this.heroDataService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  	}
    heroes: Hero[];
  	selectedHero : Hero;

  	onSelect(hero: Hero): void {
    	this.selectedHero = hero;
  	}
}