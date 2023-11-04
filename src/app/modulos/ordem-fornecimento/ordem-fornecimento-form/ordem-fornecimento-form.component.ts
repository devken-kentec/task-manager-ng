import { OrdemFornecimentoService } from './../shared/ordem-fornecimento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdemFornceciemnto } from '../shared/ordem-fornecimento-model';

@Component({
  selector: 'app-ordem-fornecimento-form',
  templateUrl: './ordem-fornecimento-form.component.html',
  styleUrls: ['./ordem-fornecimento-form.component.css'],
  preserveWhitespaces: true
})
export class OrdemFornecimentoFormComponent implements OnInit{

  msgPost: boolean = false;
  ordemFornecimentoForm: FormGroup;
  nomeBotao: string = "Salvar";
  ordensFornecimento: OrdemFornceciemnto[] = [];

  constructor(private fb: FormBuilder,
              private ordemFornecService: OrdemFornecimentoService){
    this.ordemFornecimentoForm = this.fb.group({
      id: [],
      numero: [""],
      referencia: ["", Validators.required],
      status: [""]
    });
  }

  ngOnInit(): void {
    this.listarOFs();
  }

  public gravarOrdFornecimento(){
    let form = this.ordemFornecimentoForm;
    if(form.valid){
      this.ordemFornecService.salvarAlterarEntrega(form.value).subscribe((res: any)=>{
        this.msgPost = true;
      });
      this.listarOFs();
      this.ordemFornecimentoForm.reset();
    }
  }

  public listarOFs(){
    this.ordemFornecService.listarOFs().subscribe(
        res => this.ordensFornecimento = res
    );
  }

  public editar(ordemFornecimento: OrdemFornceciemnto){
    this.ordemFornecimentoForm.patchValue(ordemFornecimento);
    this.nomeBotao = "Alterar"
  }

  public pegarDados(ordemFornecimento: OrdemFornceciemnto){

  }
}
