import { environment } from 'src/environments/environment.prod';
import { Categoria } from './../model/Categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: `root`,
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  tokenSalvo: any = localStorage.getItem(`token`);

  token = {
    headers: new HttpHeaders().set(`Authorization`, this.tokenSalvo),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set(`Authorization`, this.tokenSalvo),
    };
  }


  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      `${environment.address}/categorias`
    );
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(
      `${environment.address}/categorias/${id}` ,
      this.token
    );
  }

  getCategoriaByTipo(tipo: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${environment.address}/categorias/tipo/${tipo}`)
  }

  getCategoriaByTrend(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      `${environment.address}/categorias/trendproducts`
    );
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      `${environment.address}/categorias`,
      categoria,
      this.token
    );
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${environment.address}/categorias`, categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`${environment.address}/categorias/${id}`)
  }
}
