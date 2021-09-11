import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroBaralhoPage } from './cadastro-baralho.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroBaralhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroBaralhoPageRoutingModule {}
