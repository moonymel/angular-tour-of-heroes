// in questo file setto le rotte della single page app
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

// definisco le rotte come array di oggetti che hanno tutti la stessa sintassi (path e component)
const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
