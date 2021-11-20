import { MenuComponent } from './../menu/menu.component';
import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  usuario: Usuario = new Usuario();

  confirmSenha: string;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {

  }

  logar() {
    this.auth.logar(this.usuarioLogin).subscribe(
      (resp: UsuarioLogin) => {
        this.usuarioLogin = resp;
        localStorage.setItem('token', this.usuarioLogin.token);
        localStorage.setItem('id', JSON.stringify(this.usuarioLogin.id)); //Todo na auth vou ter q parsear isso
        localStorage.setItem('nome', this.usuarioLogin.nome);
        localStorage.setItem('usuario', this.usuarioLogin.usuario);
        localStorage.setItem('tipo', this.usuarioLogin.tipo);
        location.replace('/inicio')
      },
      (error) => {
        if (error.status === 401) {
          alert('Usuário ou senha inválido');
        }
      }
    );
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value;
  }

  cadastrar() {
    this.usuario.tipo = 'cliente';
    if (this.usuario.senha == this.confirmSenha) {
      this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        alert('Usuário cadastrado com sucesso');
        this.router.navigate(['/inicio']);
      });
    } else {
      alert('As senhas não coincidem');
    }
  }

  checkSenhaLogin() {
    let inputSenha = document.getElementById('senhaLogin');
    if (inputSenha?.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text');
    } else {
      inputSenha?.setAttribute('type', 'password');
    }
  }

  checkSenhaCad() {
    let inputSenha = document.getElementById('senha');
    if (inputSenha?.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text');
    } else {
      inputSenha?.setAttribute('type', 'password');
    }
  }

  checkConfirmSenha() {
    let inputSenha = document.getElementById('confirmSenha');
    if (inputSenha?.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text');
    } else {
      inputSenha?.setAttribute('type', 'password');
    }
  }
}
