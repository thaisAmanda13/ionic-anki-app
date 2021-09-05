import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-card',
  templateUrl: './cadastrar-card.page.html',
  styleUrls: ['./cadastrar-card.page.scss'],
})
export class CadastrarCardPage implements OnInit {
  public _pergunta : string
  public resposta : string
  constructor() { }

  ngOnInit() {
  }

}
