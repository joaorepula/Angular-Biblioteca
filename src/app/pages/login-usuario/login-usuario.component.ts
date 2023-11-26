import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css'],
})
export class LoginUsuario {
  usuarioId: number = 0;

  constructor(private client: HttpClient, private router: Router) {}

  cadastrar(): void {
        this.router.navigate(['/cadastro'], { queryParams: { usuarioId: this.usuarioId } });
    };
}
