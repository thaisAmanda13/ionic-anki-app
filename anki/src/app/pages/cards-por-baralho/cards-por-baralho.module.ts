import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPorBaralhoPageRoutingModule } from './cards-por-baralho-routing.module';

import { CardsPorBaralhoPage } from './cards-por-baralho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsPorBaralhoPageRoutingModule
  ],
  declarations: [CardsPorBaralhoPage]
})
export class CardsPorBaralhoPageModule {}
