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

  constructor(private prod: ProdutoService, private cat: CategoriaService) { }

  ngOnInit(){
    this.cat.refreshToken()
  }

  cadProduto(){
    this.prod.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }

  cadCategoria(){
    this.cat.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      alert("Categoria cadastrada com sucesso!");
    });
  }
}
