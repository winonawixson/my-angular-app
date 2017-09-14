import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      {id: 0, name: 'Zero'},
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
    return {heroes};
  }

}
