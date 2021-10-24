import { Usuario } from './../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { CategoriaService } from './../service/categoria.service';
import { Categoria } from './../model/Categoria';
import { Produto } from './../model/Produto';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadprodutos',
  templateUrl: './cadprodutos.component.html',
  styleUrls: ['./cadprodutos.component.css']
})
export class CadprodutosComponent implements OnInit {

  produto: Produto = new Produto();
  categoria: Categoria = new Categoria();
  categoria2: Categoria = new Categoria();
  usuario: Usuario = new Usuario();
  idUsuario: number = environment.id;
  idCategoria: number;

  listaCategorias: Categoria[] = [];

  constructor(private prod: ProdutoService, private cat: CategoriaService) { }

  ngOnInit(){
    this.cat.refreshToken();
    this.prod.refreshToken();

    this.getCategorias();
  }

  cadProduto(){
    this.usuario.id = this.idUsuario;
    this.produto.usuario = this.usuario;

    this.produto.categoria = this.categoria2;
    this.prod.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      alert("Produto cadastrado com sucesso!");
      this.produto = new Produto();
    });
  }

  cadCategoria(){
    this.cat.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      alert("Categoria cadastrada com sucesso!");
      this.categoria = new Categoria();
    });
  }

  getCategorias(){
    this.cat.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    });
  }

  getCatById(){
    this.cat.getCategoriaById(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria2 = resp;
      console.log("🚀 ~ file: cadprodutos.component.ts ~ line 56 ~ CadprodutosComponent ~ this.cat.getCategoriaById ~ this.categoria", this.categoria)
    });
  }
}
