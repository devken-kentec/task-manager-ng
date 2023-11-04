import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefa-model';

@Component({
  selector: 'app-tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent  implements OnInit {

  msgPost: boolean = false;
  tarefaForm: FormGroup;
  nomeBotao: string = "Salvar";
  tarefas: Tarefa[] = [];

  constructor(private fb: FormBuilder,
              private tarefaService: TarefaService){
    this.tarefaForm = this.fb.group({
      id: [],
      numero: [0, Validators.required],
      descricao: [''],
      dataInicial: [''],
      dataFinal: [''],
      status: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.listarTarefas();
  }

  public listarTarefas() {
    this.tarefaService.listarTarefas().subscribe(
      res => this.tarefas = res
    );
  }

  public gravarTarefa(){
    let form = this.tarefaForm;
    if(form.valid){
      this.tarefaService.salvarAlterarTarefa(form.value).subscribe((res: any)=>{
          this.msgPost = true
          this.listarTarefas();
        }
      );
    }
    form.reset();
  }

  public updateTarefaFor(tarefa: Tarefa){
    this.tarefaForm.patchValue(tarefa);
  }

  public editar(tarefa: Tarefa){
    this.updateTarefaFor(tarefa);
  }

  public pegarDados(tarefa: any){

  }
}
