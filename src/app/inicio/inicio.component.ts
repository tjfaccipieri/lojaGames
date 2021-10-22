import { Produto } from '../model/Produto';
import { Categoria } from './../model/Categoria';
import { CategoriaService } from './../service/categoria.service';
import { ProdutoService } from './../service/produto.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  listaCategorias: Categoria[];
  listaProdutos: Produto[];

  constructor(
    public auth: AuthService,
    private prod: ProdutoService,
    private catg: CategoriaService,
    private router: Router
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
    });
  }

  dynamicSlides = [
    {
      id: 1,
      src: 'https://via.placeholder.com/900/92c952',
      alt: 'Side 1',
      title: 'Side 1',
      name: 'Promoção',
      value: '14.99',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/900/771796',
      alt: 'Side 2',
      title: 'Side 2',
      name: 'Promoção',
      value: '14.99',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/900/24f355',
      alt: 'Side 3',
      title: 'Side 3',
      name: 'Promoção',
      value: '14.99',
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/900/d32776',
      alt: 'Side 4',
      title: 'Side 4',
      name: 'Promoção',
      value: '14.99',
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/900/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      name: 'Promoção',
      value: '14.99',
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/900/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      name: 'Promoção',
      value: '14.99',
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/900/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      name: 'Promoção',
      value: '14.99',
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/900/f66b97',
      alt: 'Side 5',
      title: 'Side 5',
      name: 'Promoção',
      value: '14.99',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    autoplayHoverPause: true,
    // navText: [
    //   '<i class="fa fa-angle-left" aria-hidden="true" ></i>',
    //   '<i class="fa fa-angle-right" aria-hidden="true" ></i>',
    // ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    // nav: true,
  };
}
