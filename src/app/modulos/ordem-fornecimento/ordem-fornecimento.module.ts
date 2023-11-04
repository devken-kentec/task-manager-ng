import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdemFornecimentoRoutingModule } from './ordem-fornecimento-routing.module';
import { OrdemFornecimentoFormComponent } from './ordem-fornecimento-form/ordem-fornecimento-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    OrdemFornecimentoFormComponent
  ],
  imports: [
    CommonModule,
    OrdemFornecimentoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    TableModule
  ]
})
export class OrdemFornecimentoModule { }
