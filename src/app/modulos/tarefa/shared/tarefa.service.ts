import { take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Tarefa } from './tarefa-model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly api = `${environment.api}/taskmanager/api/v1`;

  constructor(private http: HttpClient) { }

  public listarTarefas() {
    return this.http.get<Tarefa[]>(`${this.api}/tarefa/listarTarefas`).pipe(
      take(1)
    );
  }

  private gravarTarefa(tarefa: Tarefa) {
    return this.http.post(`${this.api}/tarefa`, tarefa).pipe(
      take(1)
    );
  }

  private alterarTarefa(tarefa: Tarefa) {
    return this.http.put(`${this.api}/tarefa`, tarefa).pipe(
      take(1)
    );
  }

  public salvarAlterarTarefa(tarefa: Tarefa){
    if(tarefa.id > 0){
      return this.alterarTarefa(tarefa)
    } else {
      return this.gravarTarefa(tarefa);
    }
  }
}
