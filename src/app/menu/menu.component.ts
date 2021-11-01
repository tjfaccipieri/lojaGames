import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  userId = environment.id
  usuario: Usuario = new Usuario();

  listaCategorias: Categoria[];
  listaProdutos: Produto[];

  constructor(
    public auth: AuthService,
    private prod: ProdutoService,
    private catg: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
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



  sair(){
    environment.token = ''
    environment.usuario = ''
    environment.nome = ''
    environment.id = 0
    environment.tipo = ''
    this.router.navigate(['/inicio'])
  }

}
