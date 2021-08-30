import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/class/card';
import { CardService } from 'src/app/services/card.service';
import { User } from './../../class/User';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.page.html',
  styleUrls: ['./show-card.page.scss'],
})
export class ShowCardPage implements OnInit {
  private _cards : Card[] = this.cardService.getCardsRevisao()
  constructor(private cardService : CardService) {
    
  }

  ngOnInit() {
  }
  
}
