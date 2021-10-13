import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario();
  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  cadastrar() {
    console.log(this.usuario);
    this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      alert('cadastrado no banco');
    });
  }

  logar(){

    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp
      environment.nome = this.usuarioLogin.nome
      environment.usuario = this.usuarioLogin.usuario
      environment.token = this.usuarioLogin.token
      console.log("🚀 ~ file: cadastro.component.ts ~ line 36 ~ CadastroComponent ~ this.auth.logar ~ environment", environment)      
      alert('logou')
      this.router.navigate(['/inicio'])
    })
  }

  
}
