import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  


  listaCategorias: Categoria[];
  listaProdutos: Produto[];

  constructor(
    public auth: AuthService,
    private prod: ProdutoService,
    private catg: CategoriaService,
    private router: Router
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.getAllCategorias();
    this.getAllProdutos();
  }

  getAllCategorias() {
    this.catg.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    });
  }

  getAllProdutos() {
    this.prod.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }

  logar(){
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp
      environment.nome = this.usuarioLogin.nome
      environment.usuario = this.usuarioLogin.usuario
      environment.token = this.usuarioLogin.token
      this.router.navigate(['/inicio'])
    })
  }

  sair(){
    environment.token = ''
    environment.usuario = ''
    environment.nome = ''
    environment.id = 0
    environment.tipo = ''
    this.router.navigate(['/inicio'])
  }

}
