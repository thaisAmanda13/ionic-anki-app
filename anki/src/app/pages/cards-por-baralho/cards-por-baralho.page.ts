import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Baralho } from 'src/app/class/Baralho';
import { BaralhoService } from 'src/app/services/baralho.service';
import { Card } from 'src/app/class/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-cards-por-baralho',
  templateUrl: './cards-por-baralho.page.html',
  styleUrls: ['./cards-por-baralho.page.scss'],
})
export class CardsPorBaralhoPage implements OnInit {

  private _idBaralho: string
  private _baralho: Baralho
  private _cards: Card []

  constructor(private _router: Router, private _baralhoService: BaralhoService, private _cardService: CardService) { }

  ngOnInit() {
    const nav = this._router.getCurrentNavigation()
    this._idBaralho = nav.extras.state.data
    this._baralho = this._baralhoService.getBaralhoPorId(this._idBaralho)
    this._cards = this._baralhoService.getCardsDoBaralhoPorBaralho(this._idBaralho)
  }
  public alterar(idCard:number):void{
    this._router.navigateByUrl("/editar-card",
      {state:{idCard:idCard,idBaralho:this._idBaralho}})
  }
  public excluir(id): void {
    this._cardService.excluir(id)
    this._baralhoService.removeCard(this._idBaralho, id)
    this.redirect("cards-por-baralho")
  }
  public redirect(route: string) {
    this._router.navigate([route])
  }
}
