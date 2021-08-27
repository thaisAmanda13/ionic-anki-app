import { Injectable } from '@angular/core';
import { User } from './../class/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:User

  constructor() { }

  public createUser(id:number,name:string,birthDate:Date){
    this._user=new User(id,name,birthDate)
  }

  public getUser():User{
    return this._user
  }
  public updateUser(name:string,birthDate:Date){
    this._user.setName(name)
    this._user.setBirthDate(birthDate)
  }
}
