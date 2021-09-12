import { Component, OnInit } from '@angular/core';
import { Baralho } from 'src/app/class/Baralho';
import { Card } from 'src/app/class/card';
import { CardService } from 'src/app/services/card.service';
import { BaralhoService } from 'src/app/services/baralho.service';
import { Router } from '@angular/router';
import { RegisterAlert } from 'src/app/alerts/registerAlert';

@Component({
  selector: 'app-editar-card',
  templateUrl: './editar-card.page.html',
  styleUrls: ['./editar-card.page.scss'],
})
export class EditarCardPage implements OnInit {
  private _idCard: number;
  private _card: Card;
  private _idBaralho: number;
  public _pergunta: string;
  public _resposta: string;
  public _dificuldade: number;
  private _alert : RegisterAlert;

  constructor(private _cardService: CardService, 
              private _baralhoService: BaralhoService, private _router: Router) 
    {
      this._alert =  new RegisterAlert();
    }

  public editar(): void {
    if (this.validate()) {
      let novo_card: Card;
      novo_card = new Card(this._pergunta, this._resposta, this._card.getVisto(), this._card.getDataRevisao(), this._card.getDificuldade());
      this._cardService.editar(this._card, novo_card);
      this._alert.success("Card editado");
      this.returnPage();
    } 
    else 
      this._alert.error("Dados inválidos!", "Houve um erro ao editar");
  }
  public returnPage(): void {
    this._router.navigateByUrl("/cards-por-baralho",
      { state: { data: this._idBaralho } })
  }

  private validate(): boolean {
    return this._pergunta.trim() != "" && this._resposta.trim() != "" && this._dificuldade !== -1
  }

  ngOnInit() {
    const nav = this._router.getCurrentNavigation()
    this._idCard = nav.extras.state.idCard
    this._idBaralho = nav.extras.state.idBaralho
    this._card = this._cardService.getCardPorId(this._idCard)
    this._pergunta = this._card.getPergunta()
    this._resposta = this._card.getResposta()
    this._dificuldade = this._card.getDificuldade()
  }
}
