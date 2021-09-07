import { Component } from '@angular/core';
import {UserService} from '../../services/user.service'
import {CardService} from '../../services/card.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _logado : boolean = false
  // private _countCardsRevisao : number = this._cardService.getCardsRevisao().length
  // ngOnInit() {
    
  // }
  constructor(private _userService: UserService, private _cardService: CardService, private router: Router) {
   
    this._logado =  this._userService.getUser() != null
      
    

  }
  public redirect(route : string){
    this.router.navigate([route])
  }
}
