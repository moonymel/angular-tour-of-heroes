// usiamo i service per la collezione di dati e di validazioni che poi passo alle componenti, che si occupano solo di visualizzare a schermo i dati ottenuti (tipo da api)
import { Injectable } from '@angular/core';
import { Hero } from './heroes/heroes';
import { HEROES } from './mock-heroes';

// questa metadata è iniettabile in altre classi (@Injectable)
// quando è providedIn: root, angular lo rende iniettabile in ogni classe che la richiede
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // definisco una funzione che richiama il type Hero array e ritorna l'array HEROES mock
  getHeroes(): Hero[] {
    return HEROES;
  }
}