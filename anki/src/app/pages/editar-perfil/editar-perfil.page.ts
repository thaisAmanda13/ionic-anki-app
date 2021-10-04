import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../class/User';
import { UserService } from 'src/app/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  private _formEditUser: FormGroup
  private isSubmitted: boolean = false
  private _user : User 
  private _name : string
  private _birthDate: string
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _userService: UserService,
   
  ) { }

  ngOnInit() {
    // const nav = this.router.getCurrentNavigation()
    // this._user = nav.extras.state.objeto
    
    // this._user = this._userService.getUser()
    console.log(this._user)
    // this._formEditUser = this.formBuilder.group({
    //   // _name: [this._user.getName(), [Validators.required, Validators.minLength(3)]],
    //   _birthDate: [this._user.getBirthDate(), [Validators.required]],
    

    // })

  }

  private get errorControl() {
    return this._formEditUser.controls
  }

  private async editarUser() {
    // if (await confirm() == true) {
    //   this._userService.updateUser(
    //     this._formEditUser.value['_name'],
    //     this._formEditUser.value['_birthDate'].split('T')[0])
    //   this.router.navigate(['home'])
    // }
  }
  public redirect(route : string){
    this.router.navigate([route])
  }
}
