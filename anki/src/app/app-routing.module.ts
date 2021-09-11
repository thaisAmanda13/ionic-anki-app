import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'show-card',
    loadChildren: () => import('./pages/show-card/show-card.module').then(m => m.ShowCardPageModule)
  },
  {
    path: 'cadastrar-usuario',
    loadChildren: () => import('./pages/cadastrar-usuario/cadastrar-usuario.module').then(m => m.CadastrarUsuarioPageModule)
  }, 
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then(m => m.EditarPerfilPageModule)
  },
  {
    path: 'cadastrar-card',
    loadChildren: () => import('./pages/cadastrar-card/cadastrar-card.module').then(m => m.CadastrarCardPageModule)
  },
  {
    path: 'baralhos',
    loadChildren: () => import('./pages/baralhos/baralhos.module').then( m => m.BaralhosPageModule)
  },
  {
    path: 'cadastro-baralho',
    loadChildren: () => import('./pages/cadastro-baralho/cadastro-baralho.module').then( m => m.CadastroBaralhoPageModule)
  },
  {
    path: 'editar-baralho',
    loadChildren: () => import('./pages/editar-baralho/editar-baralho.module').then( m => m.EditarBaralhoPageModule)
  },  {
    path: 'cards-por-baralho',
    loadChildren: () => import('./pages/cards-por-baralho/cards-por-baralho.module').then( m => m.CardsPorBaralhoPageModule)
  },
  {
    path: 'editar-card',
    loadChildren: () => import('./pages/editar-card/editar-card.module').then( m => m.EditarCardPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }