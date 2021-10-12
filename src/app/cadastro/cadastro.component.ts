import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  cadastrar() {
    console.log(this.usuario);
    this.auth.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      alert('cadastrado no banco');
    });
  }
}
