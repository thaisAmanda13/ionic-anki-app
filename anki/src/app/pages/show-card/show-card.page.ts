import { Component, OnInit } from '@angular/core';
import { User } from './../../class/User';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.page.html',
  styleUrls: ['./show-card.page.scss'],
})
export class ShowCardPage implements OnInit {

  constructor() {
    const u1 = new User("William Nahirnei Lopes", new Date(2021,10,10))
  }

  ngOnInit() {
  }

}
