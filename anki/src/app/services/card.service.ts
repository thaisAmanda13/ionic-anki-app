import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Card } from '../class/card'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _cards : Card[] = []
  private _cardsRevisao : Card[] = []
  private _PATH : string = 'cards/'
  constructor(private db: AngularFireDatabase) {
    
  }

 getCards() {
   return this.db.list(this._PATH).snapshotChanges().pipe(
      map((action) => {
        return action.map((dados) => ({
          key: dados.payload.key,
          data: dados.payload.val()
        }))
      })
    );
    
    // aux.forEach(data => {
    //   data.forEach(item => {

    //     arr.push(<Card> item.data)
      
    //   })
    // })
    // console.log('array', arr)
    // return arr
  }

   filterCardsRevisao(allCards : any) {
    

    for(let i = 0; i < allCards.length; i ++){
   
      if(new Date(allCards[i].getDataRevisao()) <= new Date()){
        this._cardsRevisao.push(allCards[i])
      }
    }

    return this._cardsRevisao
  }

  public cadastrar(card : Card) {
    
      return this.db.database.ref(this._PATH).push(card)
    
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
