import { Component, OnInit } from '@angular/core';
import { Hero } from './hero-details/hero';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Winter is coming.';
  selectedHero: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService){}
  
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
