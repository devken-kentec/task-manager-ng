import { LancamentoEntrega } from '../shared/lancamento-entrega.model';
import { LancamentoService } from './../shared/lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-list-entrega',
  templateUrl: './lancamento-list-entrega.component.html',
  styleUrls: ['./lancamento-list-entrega.component.css']
})

export class LancamentoListEntregaComponent implements OnInit {

  listaEntregas5101: LancamentoEntrega[] = [];
  listaEntregas5102: LancamentoEntrega[] = [];
  listaEntregas5103: LancamentoEntrega[] = [];
  listaEntregas5104: LancamentoEntrega[] = [];
  listaEntregas5105: LancamentoEntrega[] = [];
  listaEntregas5106: LancamentoEntrega[] = [];
  listaEntregas5107: LancamentoEntrega[] = [];
  listaEntregas5108: LancamentoEntrega[] = [];
  listaEntregas5109: LancamentoEntrega[] = [];
  listaEntregas51010: LancamentoEntrega[] = [];

  constructor(private lancamentoService: LancamentoService){

  }

  ngOnInit(): void {
    this.listarEntregaAtividade5101("5.10.1");
    this.listarEntregaAtividade5102("5.10.2");
    this.listarEntregaAtividade5103("5.10.3");
    this.listarEntregaAtividade5104("5.10.4");
    this.listarEntregaAtividade5105("5.10.5");
    this.listarEntregaAtividade5106("5.10.6");
    this.listarEntregaAtividade5107("5.10.7");
    this.listarEntregaAtividade5108("5.10.8");
    this.listarEntregaAtividade5109("5.10.9");
    this.listarEntregaAtividade51010("5.10.10");
  }

  public listarEntregaAtividade5101(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5101 = res;
    })
  }

  public listarEntregaAtividade5102(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5102 = res;
    })
  }

  public listarEntregaAtividade5103(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5103 = res;
    })
  }

  public listarEntregaAtividade5104(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5104 = res;
    })
  }

  public listarEntregaAtividade5105(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5105 = res;
    })
  }

  public listarEntregaAtividade5106(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5106 = res;
    })
  }

  public listarEntregaAtividade5107(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5107 = res;
    })
  }

  public listarEntregaAtividade5108(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5108 = res;
    })
  }

  public listarEntregaAtividade5109(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5109 = res;
    })
  }

  public listarEntregaAtividade51010(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas51010 = res;
    })
  }
}
