import { Component } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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
  // heroes = HEROES;

  // avendo HeroService, definisco la proprietà heroes che sarà un array vuoto di type Hero
  heroes: Hero[] = [];

  // definisco la proprietà selectedHero di type Hero che può non essere non assegnata
  selectedHero?: Hero;

  // iniettiamo HeroService utilizzabile come variabile heroService e MessageService come messageService
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // questo metodo esegue il codice all'avvio (created di Vue)
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelected(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`You selected hero with id of ${hero.id} and name ${hero.name}`)
  }

  // definisco la funzione getHeroes che riempie l'array heroes tramite la funzione getHeroes di HeroService (qui dichiarata come heroService)
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // in questo caso la sintassi riproduce una chiamata api. nella funzione richiamo la funzione di HeroService (qui heroService), usando subscribe() per riempire l'array Hero[] con quello che mi ritorna la funzione getHeroes
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x => {
        this.heroes = x;
        console.log(x);
      })
  }

}
