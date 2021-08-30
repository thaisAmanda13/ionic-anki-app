import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../class/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {
  private _name: string;
  private _birthDate: Date;

  constructor(private router: Router, private UserService: UserService) 
  {
    //incluir alert de sucesso ao cadastrar
  }

  ngOnInit() {
  }
  cadastrarUsuario() 
  {
    this.UserService.createUser(this._name, this._birthDate);
  }
}
