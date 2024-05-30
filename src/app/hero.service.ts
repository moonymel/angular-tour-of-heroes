// usiamo i service per la collezione di dati e di validazioni che poi passo alle componenti, che si occupano solo di visualizzare a schermo i dati ottenuti (tipo da api)
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/heroes';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

// questa metadata è iniettabile in altre classi (@Injectable)
// quando è providedIn: root, angular lo rende iniettabile in ogni classe che la richiede
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // rendo iniettabile MessageService qui con la variabile messageService
  constructor(private messageService: MessageService) { }

  // definisco una funzione che richiama il type Hero array e ritorna l'array HEROES mock
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // definisco una funzione che richiama il type Hero e lo rende observable, sintassi simile alla chiamata api: osserva e aspetta dati
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    // aggiungo il messaggio come informazione bindabile
    this.messageService.add('The HeroService Fetched the Heroes');
    return heroes;
  }
}
