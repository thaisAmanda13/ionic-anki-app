import { Component, OnInit } from '@angular/core';
import { Baralho } from './../../class/Baralho';
import { BaralhoService } from './../../services/baralho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baralhos',
  templateUrl: './baralhos.page.html',
  styleUrls: ['./baralhos.page.scss'],
})
export class BaralhosPage implements OnInit {
  private _lista_baralhos : Baralho[]

  constructor(private _baralhoService : BaralhoService, private router: Router) {
    this._lista_baralhos=this._baralhoService.getBaralhos()
  }

  public excluir(id):void{
    this._baralhoService.excluir(id)
    this.redirect("baralhos")
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
