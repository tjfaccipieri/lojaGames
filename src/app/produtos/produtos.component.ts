import { CarrinhoService } from './../service/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  listaCategorias: Categoria[];
  listaProdutos: Produto[];
  produto: Produto;
  idProd: number

  constructor(
    public auth: AuthService,
    private prod: ProdutoService,
    private catg: CategoriaService,
    private router: Router,
    private carrinho: CarrinhoService
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
      this.listaProdutos.sort((a, b) => a.preco - b.preco)
    });
  }

  getProdById(id: number){
    this.prod.getProdutoById(id).subscribe((resp: Produto) =>{
      this.produto = resp;
      this.addProduto()
      // this.desconto();
      // this.parcela();
    })
  }

  addProduto(){
    this.carrinho.adicionar(this.produto)
    console.log(this.carrinho.produtos)
  }
  
}
