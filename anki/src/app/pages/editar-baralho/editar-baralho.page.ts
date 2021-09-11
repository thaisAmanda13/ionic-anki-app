import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Baralho } from 'src/app/class/Baralho';
import { BaralhoService } from './../../services/baralho.service';

@Component({
  selector: 'app-editar-baralho',
  templateUrl: './editar-baralho.page.html',
  styleUrls: ['./editar-baralho.page.scss'],
})
export class EditarBaralhoPage implements OnInit {
  private _idBaralho: number
  private _nomeBaralho: string
  private _categoria: string
  private _baralho: Baralho
  constructor(private _router: Router, private _baralhoService: BaralhoService) { }

  ngOnInit() {
    const nav = this._router.getCurrentNavigation()
    this._idBaralho = nav.extras.state.data
    this._baralho = this._baralhoService.getBaralhoPorId(this._idBaralho)
    this._nomeBaralho = this._baralho.getNome()
    this._categoria = this._baralho.getCategoria()
  }
  public redirect(route: string) {
    this._router.navigate([route])
  }

  private editar(): void {

    if (this._nomeBaralho != undefined && this._nomeBaralho != null && this._nomeBaralho.trim() != "") {
      if (this._categoria != undefined && this._categoria != null && this._categoria.trim() != "") {
        this._baralhoService.editar(this._idBaralho, this._nomeBaralho, this._categoria)
        this.redirect("baralhos")
      }
      else {
        alert("Categoria vazia")
      }
    }
    else {
      alert("Nome vazio")
    }
    this._baralho.setNome(this._nomeBaralho)
    this._baralho.setCategoria(this._categoria)

  }

}
