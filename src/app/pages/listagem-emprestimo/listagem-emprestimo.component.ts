// emprestimo-listar.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emprestimo } from 'src/app/models/emprestimo-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emprestimo-listar',
  templateUrl: './listagem-emprestimo.component.html',
  styleUrls: ['./listagem-emprestimo.component.css']
})
export class EmprestimoListarComponent {

  usuarioId: number = 0;
  livros: Emprestimo[] = [];

  constructor(private client: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.usuarioId = +params['usuarioId'] || 0;
    });

    this.client.get<Emprestimo[]>(`https://localhost:7150/api/emprestimo/listar-emprestimo/${this.usuarioId}`)
      .subscribe({
        next: (emprestimos) => {
          console.log(emprestimos)
          this.livros = emprestimos;
        }, 
        error: (erro) => {
          console.log(erro);
        }
      });
  }
}
