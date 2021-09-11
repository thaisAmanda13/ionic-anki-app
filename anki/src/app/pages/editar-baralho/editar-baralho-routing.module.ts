import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarBaralhoPage } from './editar-baralho.page';

const routes: Routes = [
  {
    path: '',
    component: EditarBaralhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarBaralhoPageRoutingModule {}
