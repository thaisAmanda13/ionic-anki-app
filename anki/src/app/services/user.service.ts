import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserInfo } from '../class/UserInfo';
import { User } from './../class/User';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:User 
  public PATH : string = 'usersInfos/'
  constructor(private authService : AuthServiceService, private db: AngularFireDatabase) { 

    // this._user= new User('Temporario', new Date()) 
  }
  public createUserExtraInfos(userinfo : UserInfo){
    
    return this.db.database.ref(this.PATH).push(userinfo)
  }
  public createUser(email:string,password:string, birthDate:Date, name:string){
   
    this.authService.signUpWithEmailAndPass(
      email, password
    )
    .then((response) => {
   
        this.createUserExtraInfos(new UserInfo(birthDate, response.user.uid, name))
      
    })
    .catch((error) => {
      
      console.log(error)
      throw new Error(error)
    })
  }
  public estaLogado() : boolean{
    const user = JSON.parse(localStorage.getItem('user'))
    return (user != null) ? true : false;
  }

  public getUserLogado() : User{
    const user = JSON.parse(localStorage.getItem('user'))
    return (user != null) ? user : null
  }

  public verifyAge(birthDate:Date)
  { 
    if (birthDate != new Date()) 
      return true;

    return false;
  }

  public getUser():User{
    return this._user;
  }

  public updateUser(name:string, birthDate:Date){
    // this._user.setName(name);
    // this._user.setBirthDate(birthDate);
  }

}
