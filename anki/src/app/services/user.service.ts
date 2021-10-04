import { Injectable } from '@angular/core';
import { User } from './../class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:User 

  constructor() { 

    // this._user= new User('Temporario', new Date()) 
  }

  public createUser(name:string, birthDate:Date){
    // this._user = new User(name, birthDate)
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
