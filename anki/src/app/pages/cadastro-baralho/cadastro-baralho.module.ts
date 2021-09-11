import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroBaralhoPageRoutingModule } from './cadastro-baralho-routing.module';

import { CadastroBaralhoPage } from './cadastro-baralho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroBaralhoPageRoutingModule
  ],
  declarations: [CadastroBaralhoPage]
})
export class CadastroBaralhoPageModule {}
