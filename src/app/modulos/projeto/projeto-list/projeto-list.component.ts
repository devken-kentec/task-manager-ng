import { ProjetoService } from './../shared/projeto.service';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../shared/projeto-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css'],
  preserveWhitespaces: true
})
export class ProjetoListComponent implements OnInit {

  projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.listarProjetos();
  }

  public listarProjetos() {
    this.projetoService.listarProjetos().subscribe(
      res => this.projetos = res
    );
  }

  public editar(projeto: Projeto){
    this.router.navigate(['editar', projeto.id, projeto.descricao, projeto.status, projeto.userId], {relativeTo: this.route});
  }

  public pegarDados(projeto: Projeto){

  }
}
