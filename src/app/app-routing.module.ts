import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { NewsComponent } from './pages/news/news.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

const routes: Routes = [
  {path:"news",component:NewsComponent},
  {path:"cards",component:CardRegisterComponent},
  {path:"pokedex", component:PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
