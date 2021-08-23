import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { User } from './../class/user';

=======
import { Card } from '../class/card'
>>>>>>> 94a8f0ed33c3ed81d0f334324bfca803b8e5ba5d
@Injectable({
  providedIn: 'root'
})
export class CardService {
<<<<<<< HEAD
  private _user:User

  constructor() { }

  public createUser(id:number,name:string,birthDate:Date){
    this._user=new User(id,name,birthDate)
  }

  public getUser():User{
    return this._user
  }
  public updateUser(name:string,birthDate:Date){
    this._user.setName(name)
    this._user.setBirthDate(birthDate)
  }
=======
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

>>>>>>> 94a8f0ed33c3ed81d0f334324bfca803b8e5ba5d
}
