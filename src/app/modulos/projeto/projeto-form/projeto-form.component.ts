import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetoService } from '../shared/projeto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css'],
  preserveWhitespaces: true
})
export class ProjetoFormComponent implements OnInit {
  msgPost: boolean = false;
  projetoForm: FormGroup;
  optionsStatus: [] = [];
  nomeBotao: string =  "Salvar";


  constructor(private fb: FormBuilder,
              private projetoService: ProjetoService,
              private route: ActivatedRoute){
    this.projetoForm = this.fb.group({
      id:[0],
      descricao: ['', Validators.required],
      status: ['', [Validators.required]],
      userId: ['', []]
     });
  }

  ngOnInit(): void {
    this.preencherFormulario();
  }

  public carregarListaStatus() {
    this.projetoService.selectStatus().subscribe(
      res => this.optionsStatus = res
    );
  }

  public gravarProjeto() {
    this.projetoForm.get('userId')?.setValue(1);
    let form = this.projetoForm;
    if(form.valid){
      this.projetoService.salvarAlterarProjeto(form.value).subscribe((res: any)=>{
        this.msgPost = true
      });
    }
    form.reset();
  }

  public preencherFormulario(){
    const routeParams = this.route.snapshot.params;
    if(routeParams["id"] > 0){
      this.nomeBotao = "Alterar";
    this.projetoForm.get('id')?.setValue(routeParams['id']);
    this.projetoForm.get('descricao')?.setValue(routeParams['descricao']);
    this.projetoForm.get('status')?.setValue(routeParams['status']);
    this.projetoForm.get('userId')?.setValue(routeParams['userId']);
    }
  }
}
