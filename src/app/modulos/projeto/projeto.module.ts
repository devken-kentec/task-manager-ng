import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjetoListComponent,
    ProjetoFormComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    TableModule
  ]
})
export class ProjetoModule { }
