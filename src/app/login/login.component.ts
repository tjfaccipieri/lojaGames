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
    // this.checkSenhaLogin();
  }

  logar() {
    this.auth.logar(this.usuarioLogin).subscribe(
      (resp: UsuarioLogin) => {
        this.usuarioLogin = resp;
        environment.nome = this.usuarioLogin.nome;
        environment.usuario = this.usuarioLogin.usuario;
        environment.token = this.usuarioLogin.token;
        environment.id = this.usuarioLogin.id;
        environment.tipo = this.usuarioLogin.tipo;
        this.router.navigate(['/inicio']).then(() => {});
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
    console.log(this.usuario);
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
