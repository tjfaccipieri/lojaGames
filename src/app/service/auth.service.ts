import { UsuarioLogin } from './../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
      `https://lojagamesbackend.herokuapp.com/usuarios/delete/${id}`, this.token
    );
  }

  logado(){
    let ok: boolean = false
    if (this.tokenSalvo != null && this.tokenSalvo != ''){
      ok = true;
    }
    return ok;
  }

  nome(){
    let nome: string = ''
    let nomeSalvo: any = localStorage.getItem('nome')
    if (nomeSalvo != ''){
      nome = nomeSalvo
    }
    return nome;
  }

  admin(){
    let ok: boolean = false;
    let tipoSalvo: any = localStorage.getItem('tipo')
    if (tipoSalvo == 'admin'){
      ok = true;
    }
    return ok;
  }

  sair(){
    localStorage.clear()
    this.logado()
  }
  
}
