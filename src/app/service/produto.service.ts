import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

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
    return this.http.get<Produto[]>(
      'https://lojagamesbackend.herokuapp.com/produtos/all', this.token
    );
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/${id}`, this.token
    );
  }

  getProdutoByName(nome: string): Observable<Produto> {
    return this.http.get<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/nome/${nome}`, this.token
    );
  }

  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      'https://lojagamesbackend.herokuapp.com/produtos',
      produto,
      this.token
    );
  }

  putProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(
      'https://lojagamesbackend.herokuapp.com/produtos',
      produto,
      this.token
    );
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
    return this.http.delete<Produto>(
      `https://lojagamesbackend.herokuapp.com/produtos/${id}`, this.token
    );
  }
}
