import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdemFornecimentoFormComponent } from './ordem-fornecimento-form/ordem-fornecimento-form.component';

const routes: Routes = [
  { path: 'new', component: OrdemFornecimentoFormComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdemFornecimentoRoutingModule { }
