import { Component } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  // dichiaro l'hero con tipo Hero
  hero: Hero = {
    id: 1,
    name: 'Miss Marvel'
  };

  // dichiaro l'array heroes su modello di HEROES
  heroes = HEROES;

}
