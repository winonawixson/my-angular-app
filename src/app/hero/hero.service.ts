import { Injectable } from '@angular/core';
import { Hero } from '../hero-details/hero';

const HEROES: Hero[] = [
  {id: 10, name: 'Jon Snow'},
  {id: 11, name: 'Arya Stark'},
  {id: 12, name: 'White Walker'},
  {id: 13, name: 'Ygritte'},
  {id: 14, name: 'Wildling'},
  {id: 15, name: 'Wonder Woman'},
  {id: 16, name: 'Sur Humphrey'},
  {id: 17, name: 'Asha Yara Greyjoy'},
  {id: 18, name: 'Lyanna Mormont'},
  {id: 19, name: 'Daenerys '},
  {id: 20, name: 'Tyrion Lannister'}
  ];
  
@Injectable()
export class HeroService {

  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

}
