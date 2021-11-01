import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.css'],
})
export class ListaprodutosComponent implements OnInit {
  listaProdutos: Produto[] = [];
  listaCategorias: Categoria[] = [];
  produto: Produto = new Produto();
  idValido: number = 0
  idCategoria: number;
  categoria2: Categoria = new Categoria();

  constructor(
    private prod: ProdutoService, 
    private cat: CategoriaService
    ) {}

  ngOnInit() {
    this.getProdutos();
    this.getCategorias();
    
  }

  getProdutos() {
    this.prod.getAllProdutos().subscribe((produtos: Produto[]) => {
      this.listaProdutos = produtos;
      this.listaProdutos.sort((a, b) => a.id - b.id) // ordem ascendente
      // this.listaProdutos.sort((a, b) => b.id - a.id) // ordem decrescente
      this.idValido = this.listaProdutos[0].id;
      this.getProdutoById(this.idValido)
    });
  }

  getCategorias() {
    this.cat.getAllCategorias().subscribe((categorias: Categoria[]) => {
      this.listaCategorias = categorias;
    });
  }

  getProdutoById(id: number) {
    this.prod.getProdutoById(id).subscribe((produto: Produto) => {
      this.produto = produto;
    });
  }

  getCatById(){
    this.cat.getCategoriaById(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria2 = resp;
      console.log("🚀 ~ file: cadprodutos.component.ts ~ line 56 ~ CadprodutosComponent ~ this.cat.getCategoriaById ~ this.categoria", this.categoria2)
    });
  }

  editar() {
    this.prod.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      alert('Produto atualizado com sucesso');
      this.getProdutos();
    })
  }

  deletarProduto() {
    this.prod.deleteProduto(this.produto.id).subscribe(() => {
      alert('Produto deletado com sucesso!');
      this.getProdutos();
    });
  }
}
