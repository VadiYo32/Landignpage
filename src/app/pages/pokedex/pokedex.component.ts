import { Component, OnInit } from '@angular/core';
import { PokedexEntry } from 'src/app/models/pokemon.model';
import { PokedexService } from '../../services/pokedex.service';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokedexService:PokedexService ) { }
  public pokedex: PokedexEntry[] =[] ;

  ngOnInit(): void {
      this.pokedexService.getPokedex().subscribe((response: any) => {
      console.log(response.results);
      this.pokedex = response.results;
    });
  }

}
