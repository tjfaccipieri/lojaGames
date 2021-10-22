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

  constructor(private prod: ProdutoService) { }

  ngOnInit(){

  }

  cadProduto(){
    this.prod.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }
}
