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
  edicao: boolean = false;
  tamanhoAtividade5201: number = 0;
  produto5201: number = 0;
  tamanhoAtividade5202: number = 0;
  produto5202: number = 0;
  tamanhoAtividade5203: number = 0;
  produto5203: number = 0;
  tamanhoAtividade5204: number = 0;
  produto5204: number = 0;
  tamanhoAtividade5205: number = 0;
  produto5205: number = 0;
  tamanhoAtividade5206: number = 0;
  produto5206: number = 0;
  tamanhoAtividade5207: number = 0;
  produto5207: number = 0;
  tamanhoAtividade5208: number = 0;
  produto5208: number = 0;
  tamanhoAtividade5209: number = 0;
  produto5209: number = 0;
  tamanhoAtividade52010: number = 0;
  produto52010: number = 0;
  pontuacaoTotal: number = 0;

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
    this.pontuacao();
  }

  public habilitarEdicao(){
    this.edicao = !this.edicao;
  }

  public listarEntregaAtividade5101(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5101 = res;
      this.tamanhoAtividade5201 = this.listaEntregas5101.length;
      this.produto5201 = this.tamanhoAtividade5201*this.listaEntregas5101[0].valor;
    })
  }

  public listarEntregaAtividade5102(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5102 = res;
      this.tamanhoAtividade5202 = this.listaEntregas5102.length;
      this.produto5202 = this.tamanhoAtividade5202*this.listaEntregas5102[0].valor;
    })
  }

  public listarEntregaAtividade5103(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5103 = res;
      this.tamanhoAtividade5203 = this.listaEntregas5103.length;
      this.produto5203 = this.tamanhoAtividade5203*this.listaEntregas5103[0].valor;
    })
  }

  public listarEntregaAtividade5104(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5104 = res;
      this.tamanhoAtividade5204 = this.listaEntregas5104.length;
      this.produto5204 = this.tamanhoAtividade5204*this.listaEntregas5104[0].valor;
    })
  }

  public listarEntregaAtividade5105(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5105 = res;
      this.tamanhoAtividade5205 = this.listaEntregas5105.length;
      this.produto5205 = this.tamanhoAtividade5205*this.listaEntregas5105[0].valor;
    })
  }

  public listarEntregaAtividade5106(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5106 = res;
      this.tamanhoAtividade5206 = this.listaEntregas5106.length;
      this.produto5206 = this.tamanhoAtividade5206*this.listaEntregas5106[0].valor;
    })
  }

  public listarEntregaAtividade5107(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5107 = res;
      this.tamanhoAtividade5207 = this.listaEntregas5107.length;
      this.produto5207 = this.tamanhoAtividade5207*this.listaEntregas5107[0].valor;
    })
  }

  public listarEntregaAtividade5108(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5108 = res;
      this.tamanhoAtividade5208 = this.listaEntregas5108.length;
      this.produto5208 = this.tamanhoAtividade5208*this.listaEntregas5108[0].valor;
    })
  }

  public listarEntregaAtividade5109(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas5109 = res;
      this.tamanhoAtividade5209 = this.listaEntregas5109.length;
      this.produto5209 = this.tamanhoAtividade5209*this.listaEntregas5109[0].valor;
    })
  }

  public listarEntregaAtividade51010(codigo: string){
    this.lancamentoService.listarLancamentosEntregaAtividade(codigo).subscribe((res: LancamentoEntrega[])=>{
      this.listaEntregas51010 = res;
      this.tamanhoAtividade52010 = this.listaEntregas51010.length;
      this.produto52010 = this.tamanhoAtividade52010*this.listaEntregas51010[0].valor;
    })
  }

  public pontuacao(): number {
    this.pontuacaoTotal = this.produto5201 + this.produto5202 +this.produto5203 + this.produto5204 +
    this.produto5205 + this.produto5206 + this.produto5207 + this.produto5208 + this.produto5209 +
    this.produto52010;
    return this.pontuacaoTotal;
  }
}
