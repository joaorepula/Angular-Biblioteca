import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Livro } from 'src/app/models/livro-model';
import { Emprestimo } from 'src/app/models/emprestimo-model';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livros-listar',
  templateUrl: './listagem-livros.component.html',
  styleUrls: ['./listagem-livros.component.css']
})
export class ListarLivroComponent {

  usuarioId: number = 0;
  livros: Livro[] = [];
  livroSelecionado: Livro | null = null; 

  constructor(private client: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.usuarioId = +params['usuarioId'] || 0;
    });

    this.client.get<Livro[]>("https://localhost:7150/api/livro/listar")
      .subscribe({
        next: (livros) => {
          this.livros = livros;
        }, 
        error: (erro) => {
          console.log(erro);
        }
      });
  }

  emprestimo(livro: Livro): void {
    let emprestimo = {
      livroId: livro.livroId,
      usuarioId: this.usuarioId,
    };

    console.log(emprestimo);

    this.client.post<Emprestimo>("https://localhost:7150/api/emprestimo/cadastrar", emprestimo).subscribe({
      next: (tarefa) => {
        console.log(tarefa);
        this.router.navigate(['/emprestimo'], { queryParams: { usuarioId: this.usuarioId } });
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  devolver(livro: Livro): void {
    let emprestimo = {
      livroId: livro.livroId,
      usuarioId: this.usuarioId,
    };
    console.log(emprestimo)
    this.client.post<Emprestimo>("https://localhost:7150/api/emprestimo/devolucao", emprestimo).subscribe({
      next: (tarefa) => {
        console.log(tarefa);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
