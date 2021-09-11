import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaralhosPage } from './baralhos.page';

const routes: Routes = [
  {
    path: '',
    component: BaralhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaralhosPageRoutingModule {}
