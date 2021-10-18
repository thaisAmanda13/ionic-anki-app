import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { Baralho } from '../class/Baralho'
import { CardService } from 'src/app/services/card.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
@Injectable({
  providedIn: 'root'
})
export class BaralhoService {
  private _listaBaralho : Baralho[]=[]
  private _cards : Card[]=[]
  
  constructor(private cardService : CardService) { 

    this._listaBaralho.push(new Baralho('Idiomas','Ingles'))
    this._listaBaralho.push(new Baralho('Engenharia de Software','frances'))
  
  }

  public cadastrar(nome:string,categoria:string):Baralho{
    let _baralho =new Baralho(nome,categoria)
    this._listaBaralho.push(_baralho)
    return _baralho
  }
  public excluir(id):boolean
  {
    for(let i = 0;  i < this._listaBaralho.length; i++){
      if((this._listaBaralho[i].getId() == id)){
        this._listaBaralho.splice(i,1)
        return true
      }
    }
  }

  public removeCard(idBaralho:number,idCard:number):void{
    let baralho=this.getBaralhoPorId(idBaralho)
    for(let i = 0;  i < baralho.getListaCards().length; i++){
      if((baralho.getListaCards()[i].getId() == idCard)){
        baralho.getListaCards().splice(i,1)
      }
    }
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
    // console.log(this.getBaralhoPorId(idBaralho), this.cardService.getCardPorId(idCard))
    var _baralho=this.getBaralhoPorId(idBaralho)
    var _card=this.cardService.getCardPorId(idCard)
   
    if(_baralho!=null && _card!=null){
      
      _baralho.addCard(_card)
    }else{
      throw"Baralho ou Card Não encontrado"
    }
  }

  public editar(idBaralho,nome,categoria):void{
    let _baralho = this.getBaralhoPorId(idBaralho)
    if(_baralho!=null){
      _baralho.setNome(nome)
      _baralho.setCategoria(categoria)
    }
    else
    throw"Baralho não econtrado"
  }

}
