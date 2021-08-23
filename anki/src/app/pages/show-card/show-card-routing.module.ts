import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCardPage } from './show-card.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCardPageRoutingModule {}
