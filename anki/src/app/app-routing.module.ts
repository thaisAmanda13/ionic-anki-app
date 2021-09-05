import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'show-card',
    loadChildren: () => import('./pages/show-card/show-card.module').then( m => m.ShowCardPageModule)
  },
  {
    path: 'cadastrar-usuario',
    loadChildren: () => import('./pages/cadastrar-usuario/cadastrar-usuario.module').then( m => m.CadastrarUsuarioPageModule)
  },  {
    path: 'cadastrar-card',
    loadChildren: () => import('./pages/cadastrar-card/cadastrar-card.module').then( m => m.CadastrarCardPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
