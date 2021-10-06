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
  private name: string;
  private birthDate: Date;
  private _alert: RegisterAlert;
  private password : string;
  private email : string;
  constructor(private router: Router, private UserService: UserService) 
  {
    this._alert = new RegisterAlert();
  }

  ngOnInit() {
  }
  cadastrarUsuario() :void
  {
    if (this.UserService.verifyAge(this.birthDate)){
      try{
        this.UserService.createUser(this.email,this.password, this.birthDate, this.name);
        this._alert.success("Sucesso ao cadastrar");
        this.router.navigate(['home']);
      }
      catch(err){
        this._alert.error("Ocorreu algum erro")
      }
      
     
    }
    else
      this._alert.error("Erro ao cadastrar-se");
  }


 
  cancelar(): void 
  {
    this.router.navigate(['home']);
  }
}
