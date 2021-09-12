import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RegisterAlert } from 'src/app/alerts/registerAlert';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {
  private _name: string;
  private _birthDate: Date;
  private _alert: RegisterAlert;

  constructor(private router: Router, private UserService: UserService) 
  {
    this._alert = new RegisterAlert();
  }

  ngOnInit() {
  }
  cadastrarUsuario() :void
  {
    if (this.UserService.verifyAge(this._birthDate)){
      this.UserService.createUser(this._name, this._birthDate);
      this._alert.success("Sucesso ao cadastrar");
      this.router.navigate(['home']);
    }
    else
      this._alert.error("Erro ao cadastrar-se");
  }

  cancelar(): void 
  {
    this.router.navigate(['home']);
  }
}
