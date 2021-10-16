import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(){
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
