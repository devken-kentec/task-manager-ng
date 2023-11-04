import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';

const routes: Routes = [
  //{ path: '', component: EntregaListComponent},
  { path: 'new', component: LancamentoFormComponent },
  //{ path: 'editar/:id', component: EntregaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
