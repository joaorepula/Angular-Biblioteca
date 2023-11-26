import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLivroComponent } from "./pages/listagem-livro/listagem-livros.component";
import { LoginUsuario } from "./pages/login-usuario/login-usuario.component";
import { EmprestimoListarComponent } from "./pages/listagem-emprestimo/listagem-emprestimo.component";


const routes: Routes = [
  {
    path : "",
    component : LoginUsuario
  },
  {
    path : "cadastro",
    component : ListarLivroComponent
  },
  {
    path : "emprestimo",
    component : EmprestimoListarComponent
  },
  {
    path : "emprestimo",
    component : EmprestimoListarComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
