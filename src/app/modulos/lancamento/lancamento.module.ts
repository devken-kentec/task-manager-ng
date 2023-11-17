import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';
import { LancamentoListEntregaComponent } from './lancamento-list-entrega/lancamento-list-entrega.component';


@NgModule({
  declarations: [
    LancamentoFormComponent,
    LancamentoListComponent,
    LancamentoListEntregaComponent
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    TableModule
  ]
})
export class LancamentoModule { }
