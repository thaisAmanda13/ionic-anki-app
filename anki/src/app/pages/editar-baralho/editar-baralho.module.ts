import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarBaralhoPageRoutingModule } from './editar-baralho-routing.module';

import { EditarBaralhoPage } from './editar-baralho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarBaralhoPageRoutingModule
  ],
  declarations: [EditarBaralhoPage]
})
export class EditarBaralhoPageModule {}
