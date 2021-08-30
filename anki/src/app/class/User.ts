import { trimTrailingNulls } from "@angular/compiler/src/render3/view/util"

export class User {
    private _idUser : number
    private _name : string
    private _birthDate: Date


    constructor(name:string, birthDate:Date){
        this._idUser = new Date().getTime()
        this.setName(name)
        this.setBirthDate(birthDate)
    }

    public setName(name:string):void
    {
        if(name!=undefined&&name!=null&&name.trim()!="")
            this._name=name
        else
            throw"Valor nulo ou indefinido"
    }
    public setBirthDate(birthDate:Date):void
    {
        if(birthDate!=null&&birthDate!=undefined)
            this._birthDate=birthDate
        else
            throw"Campo nascimento nulo ou indefinido"
    }

    public getId() : number
    {
        return this._idUser
    }

    public getName():string
    {
        return this._name
    }

    public getBirthDate():Date
    {
        return this._birthDate
    }
}
