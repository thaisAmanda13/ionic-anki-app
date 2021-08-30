import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/class/card';
import { CardService } from 'src/app/services/card.service';
import { User } from './../../class/User';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.page.html',
  styleUrls: ['./show-card.page.scss'],
})
export class ShowCardPage implements OnInit {
  private _cards : Card[] = this.cardService.getCardsRevisao()
  public _showResposta : boolean = false
  private _cardAtualIndex : number = 0
  
  private _card : Card = this._cards[this._cardAtualIndex]

  constructor(private cardService : CardService) {
    console.log(this._card)
  }
  setFeedback(idDificuldade){
    this.cardService.setFeedback(this._card.getId(), idDificuldade)
    this._showResposta = false
    this.proximoCard()
  }
  proximoCard(): void {
    console.log(this._cards.length, this._cardAtualIndex)
    if(this._cardAtualIndex < this._cards.length){
      this._cardAtualIndex ++
      this._card = this._cards[this._cardAtualIndex]
      console.log(this._card)
    }
  }
  ngOnInit() {
  }
  showResposta(){
    this._showResposta = true
  }
}
