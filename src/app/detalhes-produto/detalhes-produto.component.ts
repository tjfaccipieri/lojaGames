import { CarrinhoService } from './../service/carrinho.service';
import { Produto } from './../model/Produto';
import { CategoriaService } from './../service/categoria.service';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  idProd: number
  listaCat: Categoria[] 
  idCat: number
  categoria: Categoria = new Categoria()

  prodDesconto = 0
  prodParcela: string

  constructor(
    private prod: ProdutoService,
    private cat: CategoriaService,
    private route: ActivatedRoute,
    private carrinho: CarrinhoService
  ) {}

  ngOnInit() {
    this.idProd = this.route.snapshot.params['id']
    this.getProdById();
    this.getCategorias();
  }

  getCategorias(){
    this.cat.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCat = resp;
    })
  }

  getCategoriaById(){
    this.cat.getCategoriaById(this.idCat).subscribe((resp: Categoria) =>{
      this.categoria = resp
      console.log(this.categoria)
    })
  }

  getProdById(){
    this.prod.getProdutoById(this.idProd).subscribe((resp: Produto) =>{
      this.produto = resp
      this.desconto();
      this.parcela();
      this.idCat = this.produto.categoria.id
      this.getCategoriaById()
    })
  }

  addProduto(){
    this.carrinho.adicionar(this.produto)
    console.log(this.carrinho.produtos)
  }

  desconto(){
    this.prodDesconto = this.produto.preco - (this.produto.preco * 0.15)
  }

  parcela(){
    this.prodParcela = (this.produto.preco / 12).toLocaleString('pt-BR', {maximumFractionDigits: 2, style: 'currency', currency: 'BRL'})
  }
}
