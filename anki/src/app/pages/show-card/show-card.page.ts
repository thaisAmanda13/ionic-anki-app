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
  private _fim : boolean = false
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
    
    if(this._cardAtualIndex < this._cards.length -1){
      this._cardAtualIndex ++
      this._card = this._cards[this._cardAtualIndex]
      
    }else{
      this._fim = true
    }
  }
  ngOnInit() {
  }
  showResposta(){
    this._showResposta = true
  }
}
