import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { take, tap } from 'rxjs/operators';
import { Projeto } from './projeto-model';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private readonly api = `${environment.api}/taskmanager/api/v1`;

  constructor(private http: HttpClient) { }

  public selectStatus(){
    return this.http.get<[]>(`${this.api}/public/opt/status`).pipe(
      take(1),
      tap(console.log)
    );
  }

  public listarProjeto(id: number){
    return this.http.get(`${this.api}/projeto/${id}`).pipe()
  }

  public listarProjetos() {
    return this.http.get<Projeto[]>(`${this.api}/projeto/listarProjetos`).pipe(
      take(1)
    );
  }

  private gravarProjeto(projeto: Projeto) {
    return this.http.post(`${this.api}/projeto`, projeto).pipe(
      take(1)
    );
  }

  private alterarProjeto(projeto: Projeto) {
    return this.http.put(`${this.api}/projeto`, projeto).pipe(
      take(1)
    );
  }

  public salvarAlterarProjeto(projeto: Projeto){
    if(projeto.id > 0){
      return this.alterarProjeto(projeto)
    } else {
      return this.gravarProjeto(projeto);
    }
  }
}
