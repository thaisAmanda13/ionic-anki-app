import { Injectable } from '@angular/core';
import { Card } from '../class/card'
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _cards : Card[] = []
  private _cardsRevisao : Card[] = []
  constructor() {

  }
 
  public getCardsRevisao() : Card[]{
    
    for(let i = 0; i < this._cards.length; i ++){
   
      if(new Date(this._cards[i].getDataRevisao()) <= new Date()){
        this._cardsRevisao.push(this._cards[i])
      }
    }
    return this._cardsRevisao
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

  public setFeedback(idCard : number, dificuldadeId : number): void {
    for(let i = 0;  i < this._cards.length; i++){
      if((this._cards[i].getId() == idCard)){
        var data = new Date(); 
        if(dificuldadeId == 1){  
          data = new Date(data.setDate(data.getDate() + 1)) 
        }else{
          data = new Date(data.setDate(data.getDate() + 2))
        }
        return this._cards[i].setDataRevisao(String(new Date(data)))
      }
    }
  }
}
