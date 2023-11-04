import { EntregaListComponent } from './../entrega-list/entrega-list.component';
import { TarefaService } from './../../tarefa/shared/tarefa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EntregaService } from '../shared/entrega.service';
import { ProjetoService } from '../../projeto/shared/projeto.service';
import { Projeto } from '../../projeto/shared/projeto-model';
import { Tarefa } from '../../tarefa/shared/tarefa-model';
import { Entrega } from '../shared/entrega-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrega-form',
  templateUrl: './entrega-form.component.html',
  styleUrls: ['./entrega-form.component.css']
})
export class EntregaFormComponent implements OnInit {

  msgPost: boolean = false;
  nomeBotao: string = "Salvar";
  entregaForm: FormGroup;
  projetos: Projeto[] = [];
  tarefas: Tarefa[] = [];

  constructor(private fb: FormBuilder,
              private entregaService: EntregaService,
              private projetoService: ProjetoService,
              private tarefaService: TarefaService,
              private route: ActivatedRoute
             ){


    this.entregaForm = this.fb.group({
      id:[],
      data: [""],
      urlGit: ["", [Validators.required]],
      observacao: [""],
      status: ["", [Validators.required]],
      projetoId:[""],
      tarefaId: [""],
      userId: [""]
    });

  }
  ngOnInit(): void {
    this.listarProjetos();
    this.listarTarefas();
    this.preencherFormulario();
  }

  public preencherFormulario(){
    const routeParams = this.route.snapshot.params;
    if(routeParams["id"] > 0){
      this.entregaService.listarEntrega(routeParams["id"]).subscribe((res: any)=>{
        this.entregaForm.patchValue(res);
        this.nomeBotao = "Alterar";
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

  public gravarEntrega(){
    this.entregaForm.get("userId")?.setValue(1);
    let form = this.entregaForm;
    if(form.valid){
      this.entregaService.salvarAlterarEntrega(form.value).subscribe((res: any)=>{
        this.msgPost = true
      });

      this.entregaForm.reset();
    }
  }
}
