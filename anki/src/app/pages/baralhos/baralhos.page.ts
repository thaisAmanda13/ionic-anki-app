import { Component, OnInit } from '@angular/core';
import { Baralho } from './../../class/Baralho';
import { BaralhoService } from './../../services/baralho.service';
import { Router } from '@angular/router';
import { ConfirmAlert } from 'src/app/alerts/confirmAlert';
import {RegisterAlert} from 'src/app/alerts/registerAlert';

@Component({
  selector: 'app-baralhos',
  templateUrl: './baralhos.page.html',
  styleUrls: ['./baralhos.page.scss'],
})
export class BaralhosPage implements OnInit {
  private _alert : ConfirmAlert;
  private _sucessAlert : RegisterAlert;
  private _lista_baralhos : Baralho[];

  constructor(private _baralhoService : BaralhoService, private router: Router) {
    this._lista_baralhos=this._baralhoService.getBaralhos();
    this._alert =  new ConfirmAlert();
    this._sucessAlert =  new RegisterAlert();
  }

  public excluir(id):void{
    this._alert.confirm("Tem certeza?","Após excluir, não é possivel recuperar!")
    if(this._baralhoService.excluir(id))
    { 
      // this._sucessAlert.success("O baralho foi deletado!")
      this.redirect("baralhos")
    }
  }
  public alterar(idBaralho:number):void{
    this.router.navigateByUrl("/editar-baralho",
      {state:{data:idBaralho}})
  }
  public cards(idBaralho:number):void{
    this.router.navigateByUrl("/cards-por-baralho",
    {state:{data:idBaralho}})
  }

  public redirect(route : string){
    this.router.navigate([route])
  }

  ngOnInit() {
  }

}
