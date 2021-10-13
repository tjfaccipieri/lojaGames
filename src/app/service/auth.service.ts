import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      'https://lojagamesbackend.herokuapp.com/usuarios/all',
      this.token
    );
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `https://lojagamesbackend.herokuapp.com/usuarios/${id}`,
      this.token
    );
  }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'https://lojagamesbackend.herokuapp.com/usuarios/logar',
      usuarioLogin
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://lojagamesbackend.herokuapp.com/usuarios/cadastrar',
      usuario
    );
  }

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      'https://lojagamesbackend.herokuapp.com/usuarios/atualizar',
      usuario,
      this.token
    );
  }

  deleteUsuario(id: number) {
    return this.http.delete(
      `https://lojagamesbackend.herokuapp.com/usuarios/delete/${id}`
    );
  }

  logado(){
    let ok: boolean = false
    if (environment.token != ''){
      ok = true;
    }
    return ok;
  }

  admin(){
    let ok: boolean = false;
    if (environment.tipo == 'admin'){
      ok = true;
    }
    return ok;
  }
}
