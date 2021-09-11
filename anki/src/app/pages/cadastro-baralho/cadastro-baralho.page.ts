import { Component, OnInit } from '@angular/core';
import { BaralhoService } from './../../services/baralho.service';
import { Router } from '@angular/router';
import { Baralho } from 'src/app/class/Baralho';

@Component({
  selector: 'app-cadastro-baralho',
  templateUrl: './cadastro-baralho.page.html',
  styleUrls: ['./cadastro-baralho.page.scss'],
})
export class CadastroBaralhoPage implements OnInit {
  private _nome: string;
  private _categoria: string;
  constructor(private router: Router, private baralhoService: BaralhoService) { }


  public cadastrar(): void{
       
        
    if(this._nome!=undefined&&this._nome!=null&&this._nome.trim()!=""){
      if(this._categoria!=undefined&&this._categoria!=null&&this._categoria.trim()!=""){
        this.baralhoService.cadastrar(this._nome,this._categoria)
        this.redirect("baralhos")
    }
    else{
      alert("Categoria vazia")
      }
    }
    else{
      alert("Nome vazio")
    }
  }


  public redirect(route : string){
    this.router.navigate([route])
  }
  ngOnInit() {
  }

}
