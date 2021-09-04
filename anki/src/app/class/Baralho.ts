import { Card } from '../class/card';
export class Baralho {
    _id : number
    _nome : string
    _categoria : string
    _listaCards : Card[]
    constructor(nome:string,categoria:string){
        this._id = new Date().getTime()
        this.setNome(nome)
        this.setCategoria(categoria)
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
    public addCard(card:Card):void{
        this._listaCards.push(card)
    }
    public getId():number{
        return this._id
    }
    public getNome():string{
        return this._nome
    }
    public getCategoria():string{
        return this._categoria
    }
    public getListaCards():Card[]{
        return this._listaCards
    }
}