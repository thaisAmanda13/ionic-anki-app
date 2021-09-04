import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { Baralho } from '../class/Baralho'
import { CardService } from 'src/app/services/card.service';
@Injectable({
  providedIn: 'root'
})
export class BaralhoService {
  private _listaBaralho : Baralho[]=[]
  private _cards : Card[]=[]
  private cardService : CardService
  constructor() { }

  
  public cadastrar(nome:string,categoria:string):Baralho{
    let _baralho =new Baralho(nome,categoria)
    this._listaBaralho.push(_baralho)
    return _baralho
  }
  public adicionarBaralho(baralho:Baralho):void{
    this._listaBaralho.push(baralho)
  }
  public getBaralhos():Baralho[]{
    return this._listaBaralho
  }
  public getBaralhoPorId(id):Baralho{
    for(let i = 0;  i < this._listaBaralho.length; i++){
      if((this._listaBaralho[i].getId() == id)){
        return this._listaBaralho[i]
      }
    }
    return null
  }
  public getCardsDoBaralhoPorBaralho(idBaralho:number):Card []{
    let i=0
    do{
      if(this._listaBaralho[i].getId()==idBaralho)
        return this._listaBaralho[i].getListaCards()
      i+=1
    }while(this._listaBaralho[i].getId()!=idBaralho && i<this._listaBaralho.length)

    return []    
  }

  public adicionarCardPorId(idBaralho:number,idCard:number):void{
    let _baralho=this.getBaralhoPorId(idBaralho)
    let _card=this.cardService.getCardPorId(idCard)
    if(_baralho!=null && _card!=null)
      _baralho.addCard(_card)
    else
      throw"Baralho ou Card Não encontrado"
  }

  public editar(idBaralho,nome,categoria){
    let _baralho = this.getBaralhoPorId(idBaralho)
    if(_baralho!=null){
      _baralho.setNome(nome)
      _baralho.setCategoria(categoria)
    }
    else
    throw"Baralho não econtrado"
  }

}
