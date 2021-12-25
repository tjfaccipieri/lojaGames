import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  tokenSalvo: any = localStorage.getItem('token');

  token = {
    headers: new HttpHeaders().set('Authorization', this.tokenSalvo),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', this.tokenSalvo),
    };
  }

  getAllProdutos(): Observable<Produto[]> {
    this.spinner.show();
    return this.http.get<Produto[]>(
      'https://lojagamesbackend.herokuapp.com/produtos/all', this.token
    ).pipe(finalize(() => this.spinner.hide()));
  }

  getProdutoById(id: number): Observable<Produto> {
    this.spinner.show();
    return this.http.get<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/${id}`, this.token
    ).pipe(finalize(() => this.spinner.hide()));
  }

  getProdutoByName(nome: string): Observable<Produto> {
    this.spinner.show();
    return this.http.get<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/nome/${nome}`, this.token
    ).pipe(finalize(() => this.spinner.hide()));
  }

  postProduto(produto: Produto): Observable<Produto> {
    this.spinner.show();
    return this.http.post<Produto>(
      'https://lojagamesbackend.herokuapp.com/produtos',
      produto,
      this.token
    ).pipe(finalize(() => this.spinner.hide()));
  }

  putProduto(produto: Produto): Observable<Produto> {
    this.spinner.show();
    return this.http.put<Produto>(
      'https://lojagamesbackend.herokuapp.com/produtos',
      produto,
      this.token
    ).pipe(finalize(() => this.spinner.hide()));
  }

  putCurtir(id: number): Observable<Produto> {
    return this.http.put<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/curtir/${id}`,
      this.token
    );
  }

  putDescurtir(id: number): Observable<Produto> {
    return this.http.put<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/descurtir/${id}`,
      this.token
    );
  }

  deleteProduto(id: number) {
    this.spinner.show();
    return this.http.delete<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/${id}`, this.token
    ).pipe(finalize(() => this.spinner.hide()));
  }
}
