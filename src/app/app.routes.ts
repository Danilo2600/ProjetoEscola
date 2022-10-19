import { Routes } from "@angular/router";
import { AlunosComponent } from "./alunos/alunos.component";
import { NavbarComponent } from "./alunos/navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { NavbardoisComponent } from "./navbardois/navbardois.component";
import { SobreComponent } from "./sobre/sobre.component";

export const ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "sobre", component: SobreComponent},
  {path: "alunos", component: AlunosComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "navbardois", component: NavbardoisComponent}
];