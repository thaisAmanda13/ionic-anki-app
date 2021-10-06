export class UserInfo {
    public uuid:string;
    public birthDate:Date;
    public name:string
    constructor(birthDate : Date, uuid:string, name:string){
        this.uuid = uuid;
        this.birthDate = birthDate
        this.name = name
        
    }
}
