import { Injectable } from '@angular/core';
import { HERO } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() : Hero[] {
  	return HEROES;
  }

}
