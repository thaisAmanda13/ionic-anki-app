import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  cadastrarUsuario() :void
  {
    if (this.UserService.verifyAge(this._birthDate))
      this.UserService.createUser(this._name, this._birthDate);
    //else
      //incluir alert de falha
  }

  cancelar(): void 
  {
    this.router.navigate(['home'])
  }
}
