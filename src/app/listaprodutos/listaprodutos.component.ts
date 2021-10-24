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
  constructor(
    private prod: ProdutoService, 
    private cat: CategoriaService
    ) {}

  ngOnInit() {
    this.getProdutos();
    this.getCategorias();
    this.getProdutoById(4);
  }

  getProdutos() {
    this.prod.getAllProdutos().subscribe((produtos: Produto[]) => {
      this.listaProdutos = produtos;
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

  editar() {}

  deletarProduto() {
    this.prod.deleteProduto(this.produto.id).subscribe(() => {
      alert('Produto deletado com sucesso!');
    });
  }
}
