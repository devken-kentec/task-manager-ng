import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'menu', loadChildren: ()=> import('./modulos/menu/menu.module').then(m => m.MenuModule )},
  { path: 'projeto', loadChildren: ()=> import('./modulos/projeto/projeto.module').then(p => p.ProjetoModule )},
  { path: 'tarefa', loadChildren: ()=> import('./modulos/tarefa/tarefa.module').then(t => t.TarefaModule )},
  { path: 'entrega', loadChildren: ()=> import('./modulos/entrega/entrega.module').then(e => e.EntregaModule )},
  { path: 'ordem-fornecimento', loadChildren: ()=> import('./modulos/ordem-fornecimento/ordem-fornecimento.module').then(o => o.OrdemFornecimentoModule )},
  { path: 'lancamento', loadChildren: ()=> import('./modulos/lancamento/lancamento.module').then(l => l.LancamentoModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
