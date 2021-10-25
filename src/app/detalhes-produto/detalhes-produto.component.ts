import { Produto } from './../model/Produto';
import { CategoriaService } from './../service/categoria.service';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  idProd: number

  constructor(
    private prod: ProdutoService,
    private cat: CategoriaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idProd = this.route.snapshot.params['id']
    this.getProdById();
  }


  getProdById(){
    this.prod.getProdutoById(this.idProd).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }
}
