import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarCardPageRoutingModule } from './cadastrar-card-routing.module';

import { CadastrarCardPage } from './cadastrar-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarCardPageRoutingModule
  ],
  declarations: [CadastrarCardPage]
})
export class CadastrarCardPageModule {}
