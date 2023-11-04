import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaFormComponent } from './tarefa-form/tarefa-form.component';

const routes: Routes = [
  { path: 'new', component: TarefaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaRoutingModule { }
