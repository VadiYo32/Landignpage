import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  

  constructor(private http:HttpClient){}

  getPokedex(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
    
  }

