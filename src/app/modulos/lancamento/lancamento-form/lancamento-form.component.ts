import { TarefaService } from './../../tarefa/shared/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projeto } from '../../projeto/shared/projeto-model';
import { Tarefa } from '../../tarefa/shared/tarefa-model';
import { ProjetoService } from '../../projeto/shared/projeto.service';
import { AtividadeService } from '../../atividade/shared/atividade.service';
import { Atividade } from '../../atividade/shared/atividade-model';
import { ActivatedRoute } from '@angular/router';
import { EntregaService } from '../../entrega/shared/entrega.service';
import { Lancamento } from '../shared/lancamento-model';
import { OrdemFornecimentoService } from '../../ordem-fornecimento/shared/ordem-fornecimento.service';
import { OrdemFornceciemnto } from '../../ordem-fornecimento/shared/ordem-fornecimento-model';
import { LancamentoService } from '../shared/lancamento.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent implements OnInit {
  msgPost: boolean = false;
  lancamentoForm: FormGroup;
  projetos: Projeto[] = [];
  tarefas: Tarefa[] = [];
  atividades: Atividade[] = [];
  continuar: boolean = false;
  incluirLancamento: Lancamento[] = [];
  ofs: OrdemFornceciemnto[] = [];
  mostraNumeroOf: boolean = false;
  labelSelectOf: string = "Referência:";

  constructor(private fb: FormBuilder,
              private projetoService: ProjetoService,
              private tarefaService: TarefaService,
              private atividadeService: AtividadeService,
              private entregaService: EntregaService,
              private route: ActivatedRoute,
              private ordemFornecService: OrdemFornecimentoService,
              private lancamentoService: LancamentoService){
    this.lancamentoForm = this.fb.group({
                                id: [],
                                urlGit: [],
                                projetoId: [],
                                tarefaId: [],
                                hash: ["",Validators.required],
                                ofId: [],
                                atividadeId: [],
                                arquivoGit: [],
                                status: []
                              });
  }

  ngOnInit(): void {
    this.listarProjetos();
    this.listarTarefas();
    this.listarAtividades();
    this.preencherFormulario();
    this.listarOFs();
  }

  public listarOFs(){
    this.ordemFornecService.listarOFs().subscribe((res: any)=>{
      this.ofs = res
      if(res[0].numero > 0){
        this.mostraNumeroOf = true;
        this.labelSelectOf = "N.° da OF:";
      }
    });
  }

  public preencherFormulario(){
    const routeParams = this.route.snapshot.params;
    if(routeParams["id"] > 0){
      this.entregaService.listarEntrega(routeParams["id"]).subscribe((res: any)=>{
        console.log(res)
        this.lancamentoForm.patchValue({
          urlGit: res.urlGit,
          projetoId: res.projetoId,
          tarefaId: res.tarefaId,
          status: res.status
        });
      });
    }
  }

  public listarProjetos() {
    this.projetoService.listarProjetos().subscribe(
      res => this.projetos = res
    );
  }

  public listarTarefas() {
    this.tarefaService.listarTarefas().subscribe(
      res => this.tarefas = res
    );
  }

  public listarAtividades() {
    this.atividadeService.listarAtividades().subscribe(
      res => this.atividades = res
    );
  }

  public continuarLancamento(){
    this.continuar = true;
  }

  public cortarHash(hash: string){
    let novoHash = hash.substring(0,10);
    return novoHash;
  }

  public excluir(i: number){
    this.incluirLancamento.splice(i, 1);
  }

  public incluirArquivo(){
    let dados: Lancamento = {
      urlGit: this.lancamentoForm.get("urlGit")?.value,
      projetoId: this.lancamentoForm.get("projetoId")?.value,
      tarefaId: this.lancamentoForm.get("tarefaId")?.value,
      hash: this.cortarHash(this.lancamentoForm.get("hash")?.value),
      ofId: this.lancamentoForm.get("ofId")?.value,
      atividadeId: this.lancamentoForm.get("atividadeId")?.value,
      arquivoGit: this.lancamentoForm.get("arquivoGit")?.value,
      status: this.lancamentoForm.get("status")?.value
    }
    this.incluirLancamento.push(dados);
    this.lancamentoForm.get("arquivoGit")?.setValue("");
  }

  public gravarLancamento(){
    let idOf = this.lancamentoForm.get("ofId")?.value;
    this.incluirLancamento.forEach(element => {
      element.ofId = idOf;
    });
    this.lancamentoService.gravarLancamento(this.incluirLancamento).subscribe(()=>{
      this.msgPost = true,
      this.continuar = false
    });
    this.lancamentoForm.reset();
    this.incluirLancamento = [];
  }
}
