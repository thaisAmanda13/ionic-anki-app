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
  private _logado : boolean = this._userService.getUser() != null
  
  constructor(private _userService: UserService,private router: Router) {
   
  }
  public redirect(route : string){
    this.router.navigate([route])
  }
}
