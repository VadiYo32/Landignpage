import { Component, EventEmitter ,OnInit, Output } from '@angular/core';

import { CardModel } from '../models/card.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }
  card: CardModel = new CardModel();
  @Output() envioCard: EventEmitter <CardModel>= new EventEmitter();
  ngOnInit(): void {
  }
    addCard(){
      console.log(this.card);
      this.envioCard.emit(this.card);
    }


}
