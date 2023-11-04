import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntregaRoutingModule } from './entrega-routing.module';
import { EntregaFormComponent } from './entrega-form/entrega-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EntregaListComponent } from './entrega-list/entrega-list.component';


@NgModule({
  declarations: [
    EntregaFormComponent,
    EntregaListComponent
  ],
  imports: [
    CommonModule,
    EntregaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    TableModule
  ]
})
export class EntregaModule { }
AbortController
