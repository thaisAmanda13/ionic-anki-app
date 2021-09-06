import { Component, OnInit } from '@angular/core';
import {Card} from '../../class/card'
import {Baralho} from '../../class/baralho'
import {CardService} from '../../services/card.service'
import {BaralhoService} from '../../services/baralho.service'
@Component({
  selector: 'app-cadastrar-card',
  templateUrl: './cadastrar-card.page.html',
  styleUrls: ['./cadastrar-card.page.scss'],
})
export class CadastrarCardPage implements OnInit {
  public _pergunta : string =''
  public _resposta : string = ''
  public _dataRevisao : Date
  public _dificuldade : string = '-1'
  public _baralhos : Baralho[] = this._baralhoService.getBaralhos()
  public _idBaralhoEscolhido : number = -1

  public cadastrar(): void{
    const data = new Date()
    const dataRevisao = new Date(data.setDate(data.getDate())) 
    
    if(this.validate()){
      
      const newCard = new Card(this._pergunta, this._resposta, false, dataRevisao, parseInt(this._dificuldade))  

      this._cardService.cadastrar(newCard)
      this._baralhoService.adicionarCardPorId(this._idBaralhoEscolhido, newCard.getId())
      console.log('cadastrado ', this._baralhoService.getBaralhoPorId(this._idBaralhoEscolhido))
    }else{
      
      console.log("preencha todos os campos ")
    } 
  }
  constructor(private _cardService : CardService, private _baralhoService : BaralhoService) { }
  public validate() : boolean{
    return this.stringNotEmpty(this._pergunta) && this.stringNotEmpty(this._resposta) && 
    this._idBaralhoEscolhido !== -1 && this._dificuldade !== '-1'
  }
  public stringNotEmpty(field : string):boolean{
      return field.trim() != ""
  }
  ngOnInit() {
  }

}
