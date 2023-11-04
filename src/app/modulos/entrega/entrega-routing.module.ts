import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregaFormComponent } from './entrega-form/entrega-form.component';
import { EntregaListComponent } from './entrega-list/entrega-list.component';
import { LancamentoFormComponent } from '../lancamento/lancamento-form/lancamento-form.component';

const routes: Routes = [
  { path: '', component: EntregaListComponent},
  { path: 'new', component: EntregaFormComponent },
  { path: 'editar/:id', component: EntregaFormComponent },
  { path: 'lancamento/new/:id', component: LancamentoFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregaRoutingModule { }
