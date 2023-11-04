import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaRoutingModule } from './tarefa-routing.module';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TarefaFormComponent
  ],
  imports: [
    CommonModule,
    TarefaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    TableModule
  ]
})
export class TarefaModule { }
