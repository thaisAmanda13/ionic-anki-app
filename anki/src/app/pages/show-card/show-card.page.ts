import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/class/card';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.page.html',
  styleUrls: ['./show-card.page.scss'],
})
export class ShowCardPage implements OnInit {
  public _cards : any[]
  public data : any
  public _showResposta : boolean = false
  private _cardAtualIndex : number = 0
  private _fim : boolean = false
  private _card : Card
  
  constructor(private cardService : CardService,private router: Router) {

    this.data = this.cardService.getCards()
    this._cards = []

    this.data.forEach(data => {
      const lista = data as Array<any>
      // this._cards = []
      lista.forEach(c => {
       console.log(c.data)
        if(new Date(c.data._dataRevisao) <= new Date()){
        
          this._cards.push(new Card(c.data._pergunta, c.data._resposta,
            c.data._visto,
            c.data._dataRevisao ,
            c.data._dificuldade))
            
        }
      })
      
      this._card = this._cards[this._cardAtualIndex]
    });

  //  console.log('fora do bang', this._cards)
  //   this._cards.push(new Card('vazio','kkk',false, new Date(),0))
      
  
  }
 
  setFeedback(idDificuldade){
    this.cardService.setFeedback(this._card.getId(), idDificuldade)
    this._showResposta = false
    this.proximoCard()
  }

  proximoCard(): void {
    
    if(this._cardAtualIndex < this._cards.length -1){
      this._cardAtualIndex ++
      this._card = this._cards[this._cardAtualIndex]
      
    }else{
      this._fim = true
    }
  }

  ngOnInit() {
  }

  showResposta() {
    this._showResposta = true
  }

  public redirect(route : string){
    this.router.navigate([route])
  }
}
