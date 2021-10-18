import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../class/User';
import { UserService } from 'src/app/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { user } from 'src/app/class/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CardService } from 'src/app/services/card.service';
import { UserInfo } from 'src/app/class/UserInfo';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  private _formEditUser: FormGroup
  private isSubmitted: boolean = false
  // private _user : User 
  private user : User
  private userInfo : UserInfo = new UserInfo(new Date(), 'kkk','kk') 
  private _name : string
  private _birthDate: string
  public userInfoKey : string
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthServiceService,
    private cardService: CardService
  ) { 
    
    var userInfo = null
    
    
    
    

  }

  ngOnInit() {
    var user = this.authService.getUserLogado() 
    
    this.userService.getAllUserInfos().forEach(data => {
      const lista = data as Array<any>
      lista.forEach( c => {
    
        if(c.data.uuid == user.uid){
          this.userInfoKey = c.key
          this.userInfo = new UserInfo(c.data.birthDate, c.data.uuid, c.name)
          this._formEditUser = this.formBuilder.group({
            _name: [c.data.name, [Validators.required, Validators.minLength(3)]],
            _birthDate: [c.data.birthDate, [Validators.required]],
          })
        }
  
      })    
    })

    this._formEditUser = this.formBuilder.group({
      _name: ['carregando ...', [Validators.required, Validators.minLength(3)]],
      _birthDate: ['this.userInfo.birthDate || ', [Validators.required]],
    })

  }

  private get errorControl() {
    return this._formEditUser.controls
  }

  private async editarUser() {
    if (await confirm() == true) {
      const updatedUser = new UserInfo(this._formEditUser.value['_birthDate'].split('T')[0],this._formEditUser.value['_name'],this.userInfo.uuid)
      
      this.userService.updateUser(this.userInfoKey, updatedUser)
      this.router.navigate(['home'])
    }
  }
  public redirect(route : string){
    this.router.navigate([route])
  }
}
