import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCardPageRoutingModule } from './editar-card-routing.module';

import { EditarCardPage } from './editar-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCardPageRoutingModule
  ],
  declarations: [EditarCardPage]
})
export class EditarCardPageModule {}
