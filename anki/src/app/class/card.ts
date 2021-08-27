export class Card {
    private _pergunta : string
    private _resposta : string
    private _visto : boolean
    private _dataRevisao : string
    private _dificuldade : number
    private _categoriaCard : number
    private _id : number 

    constructor(  
        _pergunta : string,
        _resposta : string,
        _visto : boolean,
        _dataRevisao : string,
        _dificuldade : number,
        _categoriaCard : number,
        
    ) {
        this._pergunta = _pergunta 
        this._resposta = _resposta 
        this._visto  = _visto 
        this._dataRevisao = _dataRevisao 
        this._dificuldade = _dificuldade 
        this._categoriaCard = _categoriaCard 
        this._id = new Date().getTime()
    }

    public setPergunta(_pergunta : string): void {
        this._pergunta = _pergunta
    }

    public setResposta(_resposta : string) : void{
        this._resposta = _resposta
    }

    public setVisto(_visto : boolean) : void {
        this._visto = _visto
    }
    public setDataRevisao(_dataRevisao : string) : void {
        this._dataRevisao = _dataRevisao
    }
    public setDificuldade(_dificuldade : number) : void{
        this._dificuldade = _dificuldade
    }
    public setCategoriaCard(_categoriaCard : number) : void{
        this._categoriaCard = _categoriaCard
    }

    public getPergunta() : string {
        return this._pergunta 
    }

    public getResposta() : string {
        return this._resposta 
    }

    public getId() : number {
        return this._id
    }

    public getVisto() : boolean {
        return this._visto 
    }
    public getDataRevisao() : string {
        return this._dataRevisao 
    }
    public getDificuldade() : number {
        return this._dificuldade 
    }
    public getCategoriaCard() : number {
        return this._categoriaCard 
    }
}
