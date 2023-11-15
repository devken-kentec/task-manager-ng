import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { LancamentoListComponent } from './lancamento-list/lancamento-list.component';

const routes: Routes = [
  { path: '', component: LancamentoListComponent },
  { path: 'new', component: LancamentoFormComponent },
  //{ path: 'editar/:id', component: EntregaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
