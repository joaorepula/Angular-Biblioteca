import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsuario } from "./pages/login-usuario/login-usuario.component";
import { ListarLivroComponent } from "./pages/listagem-livro/listagem-livros.component";
import { EmprestimoListarComponent } from "./pages/listagem-emprestimo/listagem-emprestimo.component";

import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, ListarLivroComponent, LoginUsuario,ListarLivroComponent,EmprestimoListarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
