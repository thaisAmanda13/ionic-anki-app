import { Component, OnInit } from '@angular/core';
import {Card} from '../../class/card'
import {Baralho} from '../../class/Baralho'
import {CardService} from '../../services/card.service'
import {BaralhoService} from '../../services/baralho.service'
import { Router } from '@angular/router';
import { RegisterAlert } from '../../alerts/registerAlert'

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
  private alert: RegisterAlert

  public cadastrar(): void {
    const dataRevisao = new Date() 
    
    if(this.validate()){
      
      const newCard = new Card(this._pergunta, this._resposta, false, dataRevisao, parseInt(this._dificuldade))  

      this._cardService.cadastrar(newCard)
      this._baralhoService.adicionarCardPorId(this._idBaralhoEscolhido, newCard.getId())
      this.alert.success()
      this.redirect('home')
      console.log('cadastrado ', this._baralhoService.getBaralhoPorId(this._idBaralhoEscolhido))
    }
    else{
      this.alert.error("erro", "Parece que você não preencheu campos obrigatórios")
      console.log("preencha todos os campos ")
    } 
  }

  constructor(private _cardService : CardService, private _baralhoService : BaralhoService, private router: Router) 
  {
    this.alert = new RegisterAlert();
  }
  
  
  public validate() : boolean{
    return this._pergunta.trim() != "" && this._resposta.trim() != "" && 
    this._idBaralhoEscolhido !== -1 && this._dificuldade !== '-1'
  }

  public redirect(route : string){
    this.router.navigate([route])
  }
  ngOnInit() {
  }

}
