import { CategoriaService } from './../service/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  listaCategorias: Categoria[]
  
  constructor(
    private cat: CategoriaService
  ) { }

  ngOnInit(){
    this.getAllCategorias()
  }

  getAllCategorias(){
    this.cat.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

}
