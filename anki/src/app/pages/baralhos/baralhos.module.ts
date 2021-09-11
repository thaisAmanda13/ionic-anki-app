import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaralhosPageRoutingModule } from './baralhos-routing.module';

import { BaralhosPage } from './baralhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaralhosPageRoutingModule
  ],
  declarations: [BaralhosPage]
})
export class BaralhosPageModule {}
