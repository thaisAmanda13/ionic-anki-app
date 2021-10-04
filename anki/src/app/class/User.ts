import { trimTrailingNulls } from "@angular/compiler/src/render3/view/util"

export class User {

    displayName: string 
    birthDate: Date
    email: string
    uid: string
   
    photoURL: string
    emailVerified : boolean

 

    // public setDisplayName(name:string):void
    // {
    //     if(name!=undefined&&name!=null&&name.trim()!="")
    //         this.displayName=name
    //     else
    //         throw"Valor nulo ou indefinido"
    // }
    // public setBirthDate(birthDate:Date):void
    // {
    //     if(birthDate!=null&&birthDate!=undefined)
    //         this.birthDate=birthDate
    //     else
    //         throw"Campo nascimento nulo ou indefinido"
    // }

    // // public getId() : number
    // // {
    // //     return this._idUser
    // // }

    // public getDisplayName():string
    // {
    //     return this.displayName
    // }

    // public getBirthDate():Date
    // {
    //     return this.birthDate
    // }
}
