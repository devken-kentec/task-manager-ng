import { Component } from '@angular/core';
import { Entrega } from '../../entrega/shared/entrega-model';

@Component({
  selector: 'app-lancamento-list',
  templateUrl: './lancamento-list.component.html',
  styleUrls: ['./lancamento-list.component.css']
})
export class LancamentoListComponent {
  editarEntrega: boolean = false;
  entregas: Entrega[] = [];

  habilitarEdicao(){}

  editar(m: any){}
  lancar(m: any){}
}
