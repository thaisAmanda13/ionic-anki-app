import { Injectable } from '@angular/core';
import { Card } from '../class/card'
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _cards : Card[] = []
  private _cardsRevisao : Card[] = []
  constructor() {
    this._cards.push(new Card('Comandos para execução de chamadas assincronas no Javascript', 'Async/Await',false, new Date(), 1))
    this._cards.push(new Card('Stacks suportadas pelo ionic', 'Vue.js, React e Angular',false, new Date(), 1))
    // this._cards.push(new Card('a444a', 'bbsabb',false, new Date(), 1, 1))
    // this._cards.push(new Card('aa33aa', 'bbsbbbb',false, new Date(), 1, 1))
  }

  public getCards(): Card[]{
    return this._cards
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
          if(dificuldadeId == 2){
            data = new Date(data.setDate(data.getDate() + 2))
          }  
          else{
            data = new Date(data.setDate(data.getDate() + 3))
            
          }
        }
        return this._cards[i].setDataRevisao(new Date(data))
      }

      
    }
  }

  public excluir(id):void{
    for(let i = 0;  i < this._cards.length; i++){
      if((this._cards[i].getId() == id)){
        this._cards.splice(i,1)
      }
    }
    for(let i = 0;  i < this._cardsRevisao.length; i++){
      if((this._cardsRevisao[i].getId() == id)){
        this._cardsRevisao.splice(i,1)
      }
    }
  }

  getCardPorId(idCard):Card{
    for(let i = 0;  i < this._cards.length; i++){
      if(this._cards[i].getId() == idCard)
        return this._cards[i]
    }
    return null 
  }

}
