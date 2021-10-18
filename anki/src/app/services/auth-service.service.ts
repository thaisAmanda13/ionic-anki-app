import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from  '@angular/fire/firestore'
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { User } from '../class/User';
import { UserInfo } from '../class/UserInfo';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userData : User;
  constructor(
    public ngFireAuth: AngularFireAuth,
    public router : Router, 
    public afStore: AngularFirestore,
    public ngZone : NgZone) 
    { 
      this.ngFireAuth.authState.subscribe((user) =>{
        if(user){
          this.userData = user
          localStorage.setItem('user', JSON.stringify(this.userData))
          JSON.parse(localStorage.getItem('user'))
        }else{
          localStorage.setItem('user', null)
          JSON.parse(localStorage.getItem('user'))
        }
      })
    }
    public signIn(email : string, password : string){
      return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  
    }

    public signUpWithEmailAndPass(email : string, password:string){
      
      return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
    }

    public signInWithGoogle(){ 
       this.AuthLogin(new auth.GoogleAuthProvider())
     
    }

    public AuthLogin(provider){
      return this.ngFireAuth.signInWithPopup(provider)
      .then( (result) => {
        
        this.serUserData(result.user) //
      
        this.ngZone.run(() => {
          this.router.navigate(['home'])
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
    
    public serUserData(user){
      const userRef : AngularFirestoreDocument<any> = 
      this.afStore.doc(`users/${user.uuid}`)
      const userDataConst : User = {
        // birthDate:user.birthDate,
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      }

      return userRef.set(userDataConst, {merge: true})
    }

    public estaLogado() : boolean{
      const user = JSON.parse(localStorage.getItem('user'))
      return (user != null) ? true : false;
    }

    public getUserLogado() : User{
      const user =<User> JSON.parse(localStorage.getItem('user'))
      return (user != null) ? user : null
    }
   
    public recuperarSenha(email : string){
      return this.ngFireAuth.sendPasswordResetEmail(email)
      .then( () => {
        console.log('enviado por email')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  public signOut(){
    return this.ngFireAuth.signOut()
    .then( () => {
      localStorage.removeItem('user')
      this.router.navigate(['signin'])
    })
  }
}
