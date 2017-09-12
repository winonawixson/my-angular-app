import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Winter is coming.';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
