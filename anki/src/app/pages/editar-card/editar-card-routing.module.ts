import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCardPage } from './editar-card.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCardPageRoutingModule {}
