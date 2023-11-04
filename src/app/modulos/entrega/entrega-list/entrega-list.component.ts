import { Component, EventEmitter, OnInit } from '@angular/core';
import { EntregaService } from '../shared/entrega.service';
import { Entrega } from '../shared/entrega-model';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedEntregaModel } from '../../shared/shared-entrega-model';

@Component({
  selector: 'app-entrega-list',
  templateUrl: './entrega-list.component.html',
  styleUrls: ['./entrega-list.component.css'],
  preserveWhitespaces: true
})
export class EntregaListComponent implements OnInit {

  entregas: Entrega[] = [];
  editarEntrega: boolean = false;


  constructor(private entregaService: EntregaService,
              private router: Router,
              private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.listarEntregas();
  }

  public habilitarEdicao() {
    this.editarEntrega = !this.editarEntrega;
  }

  public editar(ent: Entrega){
    this.router.navigate(["editar", ent.id], {relativeTo: this.route});
  }

  public lancar(ent: Entrega){
    this.router.navigate(["lancamento/new", ent.id], {relativeTo: this.route});
  }

  public listarEntregas() {
    this.entregaService.listarEntregas().subscribe(
      res => this.entregas = res
    );
  }
}
