import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal";
import { OrderModule } from "ngx-order-pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-owl-carousel-o";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CadprodutosComponent } from './cadprodutos/cadprodutos.component';
import { ListaprodutosComponent } from './listaprodutos/listaprodutos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';


registerLocaleData(localept, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CadastroComponent,
    ProdutosComponent,
    LoginComponent,
    MenuComponent,
    CadprodutosComponent,
    ListaprodutosComponent,
    DetalhesProdutoComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
    BrowserAnimationsModule,
    CarouselModule
  ],

  providers: [{
    provide: LOCALE_ID,
    useClass: HashLocationStrategy,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
