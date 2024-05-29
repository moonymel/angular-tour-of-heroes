import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  // per passare dal padre al figlio i dati, dichiaro una @Input property che può essere indefinita e di type Hero
  @Input() hero?: Hero;
}
