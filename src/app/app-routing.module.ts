import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, // retireciona o projeto para home como padrao ao acessar o link
  { path: 'home', component: HomeComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'detalhes/:id', component: DetalhesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
