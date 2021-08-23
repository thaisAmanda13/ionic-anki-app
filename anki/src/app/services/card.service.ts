import { Injectable } from '@angular/core';
import { Card } from '../class/card'
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _cards : Card[] = []
  constructor() {

  }

  public getCards() : Card[]{
    return this._cards
  }

  public cadastrar(card : Card): void {
    this._cards.push(card)
  }
  


  public editar(card: Card, cardEditado : Card): boolean{
  
    for(let i = 0;  i < this._cards.length; i++){
      if((this._cards[i].getId() == card.getId())){
        this._cards[i].setPergunta(cardEditado.getPergunta())
        this._cards[i].setResposta(cardEditado.getResposta())
        this._cards[i].setVisto(cardEditado.getVisto())
        this._cards[i].setDataRevisao(cardEditado.getDataRevisao())
        this._cards[i].setDificuldade(cardEditado.getDificuldade())
        this._cards[i].setCategoriaCard(cardEditado.getCategoriaCard())
        return true
      }
    }
    return false
  }




}


