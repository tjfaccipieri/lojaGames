import { CadprodutosComponent } from './cadprodutos/cadprodutos.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadprodutos', component: CadprodutosComponent},
  {path: 'listaProdutos', component: ListaprodutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
