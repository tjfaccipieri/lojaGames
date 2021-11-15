import { CheckoutComponent } from './checkout/checkout.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { CadprodutosComponent } from './cadprodutos/cadprodutos.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { Router, NavigationEnd } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadprodutos', component: CadprodutosComponent },
  { path: 'listaProdutos', component: ListaprodutosComponent },
  { path: 'detalhesProduto/:id', component: DetalhesProdutoComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}

class MyAppComponent {
  constructor(router: Router) {

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });

  }
}