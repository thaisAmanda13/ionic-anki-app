import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import {RegisterAlert} from '../../alerts/registerAlert'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class LoginPage implements OnInit {
  private _formLogar : FormGroup
  private _isSubmitted : boolean = false
  public registerAlert : RegisterAlert
  constructor(
    public alertController : AlertController,
    public router : Router,
    public formBuilder : FormBuilder,
    public authService: AuthServiceService
    ) {
      this.registerAlert = new RegisterAlert()
     }
    
  ngOnInit() {
    this._formLogar = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get errorControl(){
    return this._formLogar.controls
  }

  submitForm(){
    this._isSubmitted = true
    if(!this._formLogar.valid){
      this.registerAlert.error('Erro','Login','Todos os campos são obrigátorio')
      return false
    }else{
      this._signIn()
    }
  }

  private _signIn() : void{

    this.authService.signIn(
      this._formLogar.value['email'],
      this._formLogar.value['senha']
      )
    .then(() => {
      // this.alertController.success()
      this.router.navigate(['home'])
    })
    .catch((error) => {
      // this.alertController.error()
      console.log(error)
    })
  
  }

  private _signInGoogle() : void {

    try{
      this.authService.signInWithGoogle()
    }
    catch(error){
      console.log(error)
    }

  }
  private _irParaSignUp() : void {
    this.router.navigate(['signup'])
  }
}
