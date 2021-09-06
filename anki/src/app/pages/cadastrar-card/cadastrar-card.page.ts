import { Component, OnInit } from '@angular/core';
import {Card} from '../../class/card'
import {CardService} from '../../services/card.service'
@Component({
  selector: 'app-cadastrar-card',
  templateUrl: './cadastrar-card.page.html',
  styleUrls: ['./cadastrar-card.page.scss'],
})
export class CadastrarCardPage implements OnInit {
  public _pergunta : string
  public _resposta : string
  public _dataRevisao : Date
  public _dificuldade : string
  public _categoriaCard : string
  
  public cadastrar(): void{
    const data = new Date()
    const dataRevisao = new Date(data.setDate(data.getDate())) 
    const newCard = new Card(this._pergunta, this._resposta, false, dataRevisao, parseInt(this._dificuldade), parseInt(this._categoriaCard))
    this._cardService.cadastrar(newCard)
    console.log(newCard)
    console.log("Cadastrado com sucesso")
    console.log(this._cardService.getCardsRevisao())
  }
  constructor(private _cardService : CardService) { }

  ngOnInit() {
  }

}
