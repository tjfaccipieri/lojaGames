import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-listaprodutos',
  templateUrl: './listaprodutos.component.html',
  styleUrls: ['./listaprodutos.component.css']
})
export class ListaprodutosComponent implements OnInit {

  listaProdutos: Produto[] = [];
  constructor(private prod: ProdutoService, private cat: CategoriaService) { }

  ngOnInit() {
    this.getProdutos();
  }


  getProdutos() {
    this.prod.getAllProdutos().subscribe(
      (produtos: Produto[]) => {
        this.listaProdutos = produtos;
      }
    );
  }
}
