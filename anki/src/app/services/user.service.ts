import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInfo } from '../class/UserInfo';
import { User } from './../class/User';
import { AuthServiceService } from './auth-service.service';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:User 
  public userInfos:UserInfo
  public PATH : string = 'usersInfos/'
  constructor(private authService : AuthServiceService, private db: AngularFireDatabase, public afStore: AngularFirestore) { 

    // this._user= new User('Temporario', new Date()) 
  }
  public createUserExtraInfos(userinfo : UserInfo){
    
    return this.db.database.ref(this.PATH).push(userinfo)
  }
  public setUserExtraInfos(userInfo:UserInfo){
    const userRef : AngularFirestoreDocument<any> = 
    this.afStore.doc(`users/${userInfo.uuid}`)
      const userDataConst : UserInfo = {
        birthDate:userInfo.birthDate,
        uuid:userInfo.uuid,
        name:userInfo.name
      }

      return userRef.set(userDataConst, {merge: true})
  }
  public createUser(email:string,password:string, birthDate:Date, name:string){
   
    this.authService.signUpWithEmailAndPass(
      email, password
    )
    .then((response) => {
        const newUserInfo = new UserInfo(birthDate, response.user.uid, name)
        this.createUserExtraInfos(newUserInfo)
        this.setUserExtraInfos(newUserInfo)
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

  public getAllUserInfos(){
    return this.db.list(this.PATH).snapshotChanges().pipe(
      map((action) => {
        return action.map((dados) => ({
          key: dados.payload.key,
          data: dados.payload.val()
        }))
      })
    );
  }
  public getUser():User{
    return this._user;
  }

  public updateUser(key, user:UserInfo){
  
    return this.db.database.ref(this.PATH).child(key).update(user)
  }

}
