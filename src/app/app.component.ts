import { Component } from '@angular/core';
import { CardModel } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test.2';


  dataCard: CardModel[]=[
    {
      cardTitle:"Star Platinum",
      description:"Star Platinum (星の白金スタープラチナ, Sutā Purachina?) es el Stand de Jotaro Kujo introducido en Stardust Crusaders.",
      bottomText:"see more",
      image:"https://i.pinimg.com/originals/ba/10/6d/ba106de090939de6c950b7ece88af1c0.jpg"
    },
    {
      cardTitle:"Crazy Diamond",
      description:"Crazy Diamond (クレイジー・ダイヤモンド, kureijī daiyamondo?), o simplemente conocido como Crazy D (クレイジー・D, Kureijī Di?) es el Stand de Josuke Higashikata, protagonista principal de la Parte 4: Diamond Is Unbreakable.",
      bottomText:"see more",
      image:"https://queanime.com/wp-content/uploads/2020/02/c2096e91-6471-43d1-a47b-e7a54978895a.jpg"
    },
    {
      cardTitle:"The Hand",
      description:"The Hand (手ザ・ハンド, Za Hando?) es el Stand de Okuyasu Nijimura que aparece en Diamond Is Unbreakable.",
      bottomText:"see more",
      image:"https://i.ytimg.com/vi/UgfYYOyhZY4/maxresdefault.jpg"
    },
    {
      cardTitle:"Silver Chariot",
      description:"Silver Chariot (銀の戦車シルバー チャリオッツ, Shirubā Chariottsu, gin no senshi?) es el Stand de Jean Pierre Polnareff, que aparece en Stardust Crusaders y más tarde, brevemente, en Vento Aureo.",
      bottomText:"see more",
      image:"https://img1.ak.crunchyroll.com/i/spire4-tmb/df3e396f1d84a92f34d857bdbf94741a1398795781_main.jpg"
    },
    {
      cardTitle:"Golden Experience",
      description:"Gold Experience (黄金体験ゴールド·エクスペリエンス, Gorudo EkusuperiensuŌgon Taiken?), o simplemente conocido como Gold E (ゴールド·E,?), es el Stand de Giorno Giovanna, protagonista principal en la Parte 5: Vento Aureo.",
      bottomText:"see more",
      image:"https://img.wattpad.com/89d7d9ae015723c073bd579d2ada3d60c9135052/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5a49416a324e7454347a386855513d3d2d313032383732313032372e313636363338373731363136363233353833373434353134383733302e6a7067"
    },
    {
      cardTitle:"Sex Pistols",
      description:"Sex Pistols (セックス・ピストルズ, Sekkusu Pisutoruzu?) es el Stand de Mista, personaje principal que aparece en Vento Aureo.",
      bottomText:"see more",
      image:"https://i.ytimg.com/vi/DPa7qofuebU/maxresdefault.jpg"
    }
  ]

  addCard(card:CardModel){
    this.dataCard.push(Object.assign({},card)); 
  }
}
