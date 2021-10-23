import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Baralho } from 'src/app/class/Baralho';
import { BaralhoService } from './../../services/baralho.service';
import { RegisterAlert } from 'src/app/alerts/registerAlert';

@Component({
  selector: 'app-editar-baralho',
  templateUrl: './editar-baralho.page.html',
  styleUrls: ['./editar-baralho.page.scss'],
})
export class EditarBaralhoPage implements OnInit {
  private _idBaralho: string
  private _nomeBaralho: string
  private _categoria: string
  private _baralho: Baralho
  private _alert: RegisterAlert

  constructor(private _router: Router, private _baralhoService: BaralhoService) 
  {
    this._alert = new RegisterAlert();
  }

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
        this._alert.success("Editado com sucesso")
        this.redirect("baralhos")
      }
      else{
        this._alert.error("Erro ao editar", "Parece que você não preencheu o campo categoria")
      }
    }
    else {
      this._alert.error("Erro ao editar", "Parece que você não preencheu o campo nome")
    }

    this._baralho.setNome(this._nomeBaralho)
    this._baralho.setCategoria(this._categoria)

  }

}
