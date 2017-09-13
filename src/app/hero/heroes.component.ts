import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from '../hero-details/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  heroes : Hero[];

  constructor(private router: Router,
    private heroService: HeroService
  ){}
  
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}