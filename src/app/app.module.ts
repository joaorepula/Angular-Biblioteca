import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsuario } from "./pages/login-usuario/login-usuario.component";
import { ListarLivroComponent } from "./pages/listagem-livro/listagem-livros.component";
import { EmprestimoListarComponent } from "./pages/listagem-emprestimo/listagem-emprestimo.component";

// Importações material angular
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AppComponent, ListarLivroComponent, LoginUsuario,ListarLivroComponent,EmprestimoListarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule, BrowserAnimationsModule, MatToolbarModule,
   MatSidenavModule,MatListModule, MatIconModule, MatInputModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
