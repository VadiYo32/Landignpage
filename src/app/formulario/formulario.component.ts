import { Component, OnInit } from '@angular/core';
import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }
  card: CardModel = new CardModel();
  ngOnInit(): void {
  }
    addCard(){
      console.log(this.card);
      this.datacard.push(this.card);
    }


}
