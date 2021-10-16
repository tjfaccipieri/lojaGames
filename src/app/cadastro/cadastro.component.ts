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

  

  
}
