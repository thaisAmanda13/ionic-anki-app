import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPorBaralhoPage } from './cards-por-baralho.page';

const routes: Routes = [
  {
    path: '',
    component: CardsPorBaralhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPorBaralhoPageRoutingModule {}
