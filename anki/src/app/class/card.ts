export class Card {
    private _pergunta : string
    private _resposta : string
    private _visto : boolean
    private _dataRevisao : string
    private _dificuldade : number

    private _id : any 

    constructor(  
        _pergunta : string,
        _resposta : string,
        _visto : boolean,
        _dataRevisao : string,
        _dificuldade : number,
   
        
    ) {
        //console.log(_dataRevisao)
        this._pergunta = _pergunta 
        this._resposta = _resposta 
        this._visto  = _visto || false
        this._dataRevisao = _dataRevisao 
        this._dificuldade = _dificuldade     

    }

    public setId(id : any) : void{
        this._id = id
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


    public getPergunta() : string {
        return this._pergunta 
    }

    public getResposta() : string {
        return this._resposta 
    }

    public getId() : any {
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
  
}
