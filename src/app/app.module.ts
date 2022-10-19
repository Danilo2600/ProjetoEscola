import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoComponent } from './alunos/aluno/aluno.component';
import { NavbarComponent } from './alunos/navbar/navbar.component';
import { NavbardoisComponent } from './navbardois/navbardois.component';
import { CookieComponent } from './cookie/cookie.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { AlunosService } from './alunos/alunos.service';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    HomeComponent,
    AlunosComponent,
    AlunoComponent,
    NavbarComponent,
    NavbardoisComponent,
    CookieComponent,
    HeroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlunosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
