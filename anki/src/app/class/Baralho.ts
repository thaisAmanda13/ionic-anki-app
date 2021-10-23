import { Card } from 'src/app/class/card';
export class Baralho {
    _id : any
    _nome : string
    _categoria : string
   private _listaCards : any[] = []
    constructor(nome:string,categoria:string){
        this.setNome(nome)
        this.setCategoria(categoria)
    }

    public setId(id:any):void{
        this._id=id
    }

    public setNome(nome:string):void
    {
        if(nome!=undefined&&nome!=null&&nome.trim()!="")
            this._nome=nome
        else
            throw"Nome nulo ou indefinido"
    }
    public setCategoria(categoria:string):void
    {
        if(categoria!=undefined&&categoria!=null&&categoria.trim()!="")
            this._categoria=categoria
        else
            throw"Categoria nulo ou indefinido"
    }
    setListaCards(listaCards : string[]){
        this._listaCards = listaCards
    }
    public addCard(idCard : any):void{
        this._listaCards.push(idCard)
    }
    public getId():any{
        return this._id
    }
    public getNome():string{
        return this._nome
    }
    public getCategoria():string{
        return this._categoria
    }
    public getListaCards():string[]{
        return this._listaCards
    }
}