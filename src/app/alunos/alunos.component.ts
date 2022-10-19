import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno/aluno.model';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'pst-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos!: Aluno[];

  constructor(private alunoService: AlunosService) { }

  ngOnInit(): void {
    this.alunoService.listarAlunos().subscribe(alunos => this.alunos = alunos);
  }

}