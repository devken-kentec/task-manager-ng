import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { OrdemFornceciemnto } from './ordem-fornecimento-model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemFornecimentoService {

  private readonly api = `${environment.api}/taskmanager/api/v1`;

  constructor(private http: HttpClient) { }

  public listarOFs() {
    return this.http.get<OrdemFornceciemnto[]>(`${this.api}/ordemfornecimento/listarofs`).pipe(
      take(1)
    );
  }

  private gravarOF(of: OrdemFornceciemnto) {
    return this.http.post(`${this.api}/ordemfornecimento`, of).pipe(
      take(1)
    );
  }

  private alterarOF(of: OrdemFornceciemnto) {
    return this.http.put(`${this.api}/ordemfornecimento`, of).pipe(
      take(1)
    );
  }

  public salvarAlterarEntrega(of: OrdemFornceciemnto){
    if(of.id > 0){
      return this.alterarOF(of)
    } else {
      return this.gravarOF(of);
    }
  }
}
