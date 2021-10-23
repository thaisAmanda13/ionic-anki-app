import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Card } from '../class/card'
import { BaralhoService } from 'src/app/services/baralho.service';
// import { AngularFireDatabase } from '@angular/fire/database'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _cards : Card[] = []
  private _cardsRevisao : Card[] = []
  private _PATH : string = 'cards/'
  constructor(private db: AngularFireDatabase) {
    
  }

 
   filterCardsRevisao(allCards : any) {
    

    for(let i = 0; i < allCards.length; i ++){
   
      if(new Date(allCards[i].getDataRevisao()) <= new Date()){
        this._cardsRevisao.push(allCards[i])
      }
    }

    return this._cardsRevisao
  }


  public cadastrar(card : Card): string {
    return this.createCard(card)
  }
  
  public editar(card: Card, cardEditado : Card): boolean{
  
    for(let i = 0;  i < this._cards.length; i++){
      if((this._cards[i].getId() == card.getId())){
        this._cards[i].setPergunta(cardEditado.getPergunta())
        this._cards[i].setResposta(cardEditado.getResposta())
        this._cards[i].setVisto(cardEditado.getVisto())
        this._cards[i].setDataRevisao(cardEditado.getDataRevisao())
        this._cards[i].setDificuldade(cardEditado.getDificuldade())
        this.editCard(this._cards[i])
        return true
      }
    }
    return false
  }
  createCard(card: Card) {
    return this.db.database.ref(this._PATH).push(card).key
 }

 editCard(baralho: Card) {
  return this.db.database.ref(this._PATH).child(baralho.getId()).update(baralho)
}

removeCard(key: any) {
  return this.db.database.ref(this._PATH + key).remove()
}

getCardsDB() {
  return this.db.list(this._PATH).snapshotChanges().pipe(
    map((action) => {
      return action.map((dados) => ({
        key: dados.payload.key,
        data: dados.payload.val()
      }))
    })
  )
}


public getCards(): Card[]{
  this._cards = []
  let baralhos = this.getCardsDB()
  baralhos.forEach(data => {
    data.forEach(card => {
      let _card = new Card(card.data["_pergunta"], card.data["_resposta"], card.data["_visto"], card.data["_dataRevisao"], card.data["_dificuldade"])
      _card.setId(card.key)
      this._cards.push(_card)
    })
  })
  return this._cards
}

public getCardsRevisao() : Card[]{

  this.getCards()
  for(let i = 0; i < this._cards.length; i ++){

    if(new Date(this._cards[i].getDataRevisao()) <= new Date()){
      this._cardsRevisao.push(this._cards[i])
    }
  }
  return this._cardsRevisao
}



public setFeedback(idCard : number, dificuldadeId : number) {
    for(let i = 0;  i < this._cards.length; i++){
      if((this._cards[i].getId() == idCard)){
        var data = new Date(this._cards[i].getDataRevisao()); 
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
        this._cards[i].setDataRevisao(new Date(data).toISOString())
        this.editar(this._cards[i],this._cards[i])
        return this._cards[i]
      }
    }
  }

  public excluir(id):void{
    for(let i = 0;  i < this._cards.length; i++){
      if((this._cards[i].getId() == id)){
        this.removeCard(this._cards[i].getId())
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
