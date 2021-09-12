import { Component, OnInit } from '@angular/core';
import { BaralhoService } from './../../services/baralho.service';
import { Router } from '@angular/router';
import { Baralho } from 'src/app/class/Baralho';
import { RegisterAlert } from 'src/app/alerts/registerAlert';

@Component({
  selector: 'app-cadastro-baralho',
  templateUrl: './cadastro-baralho.page.html',
  styleUrls: ['./cadastro-baralho.page.scss'],
})
export class CadastroBaralhoPage implements OnInit {
  private _nome: string;
  private _categoria: string;
  private _alert: RegisterAlert;
  constructor(private router: Router, private baralhoService: BaralhoService) 
  {
    this._alert =  new RegisterAlert();
  }

  public cadastrar(): void 
  {
    if(this._nome!=undefined&&this._nome!=null&&this._nome.trim()!=""){
      if(this._categoria!=undefined&&this._categoria!=null&&this._categoria.trim()!=""){
        this.baralhoService.cadastrar(this._nome,this._categoria);
        this._alert.success("Baralho cadastrado com sucesso");
        this.redirect("baralhos");
    }
    else{
      this._alert.error("Categoria Vazia", "Todos os campos devem ser preenchidos!");
      }
    }
    else{
      this._alert.error("Campo NOME vazio", "Todos os campos devem ser preenchidos!");
    }
  }


  public redirect(route : string){
    this.router.navigate([route])
  }
  ngOnInit() {
  }

}
