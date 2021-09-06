import { Component } from '@angular/core';
import {UserService} from '../../services/user.service'
import {CardService} from '../../services/card.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _logado : boolean = false
  private _countCardsRevisao : number = 0
  constructor(private _userService: UserService, private _cardService: CardService) {
    console.log(this._userService.getUser())
    if(this._userService.getUser() != null){
      this._logado = true
      this._countCardsRevisao = _cardService.getCardsRevisao().length
     
    }

  }

}
