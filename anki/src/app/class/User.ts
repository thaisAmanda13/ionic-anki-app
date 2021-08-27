import { trimTrailingNulls } from "@angular/compiler/src/render3/view/util"

export class User {

    private _idUser : number
    private _name : string
    private _birthDate: Date


    constructor(idUser:number,name:string,birthDate:Date){
        this.setIdUser(idUser)
        this.setName(name)
        this.setBirthDate(birthDate)
    }

    public setIdUser(id:number):void{
        if(id!=undefined&&id!=null)
            this._idUser=id
        else
            throw "Valor nulo ou indefinido"

        }
    public setName(name:string):void{
        if(name!=undefined&&name!=null&&name.trim()!="")
            this._name=name
        else
            throw"Valor nulo ou indefinido"
    }
    public setBirthDate(birthDate:Date):void{
        if(birthDate!=null&&birthDate!=undefined)
            this._birthDate=birthDate
        else
            throw"Valor nulo ou indefinido"
    }

    public getId() : number{
        return this._idUser
    }
    public getName():string{
        return this._name
    }
    public getBirthDate():Date{
        return this._birthDate
    }

}
