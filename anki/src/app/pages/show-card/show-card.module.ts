import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCardPageRoutingModule } from './show-card-routing.module';

import { ShowCardPage } from './show-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCardPageRoutingModule
  ],
  declarations: [ShowCardPage]
})
export class ShowCardPageModule {}
