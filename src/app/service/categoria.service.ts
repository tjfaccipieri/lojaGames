import { Categoria } from './../model/Categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
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


  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      'https://lojagamesbackend.herokuapp.com/categorias'
    );
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(
      `https://lojagamesbackend.herokuapp.com/categorias/${id}` 
    );
  }

  getCategoriaByTipo(tipo: string): Observable<Categoria> {
    return this.http.get<Categoria>(`https://lojagamesbackend.herokuapp.com/categorias/tipo/${tipo}`)
  }

  getCategoriaByTrend(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      'https://lojagamesbackend.herokuapp.com/categorias/trendproducts'
    );
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      'https://lojagamesbackend.herokuapp.com/categorias',
      categoria,
      this.token
    );
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://lojagamesbackend.herokuapp.com/categorias', categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`https://lojagamesbackend.herokuapp.com/categorias/${id}`)
  }
}
