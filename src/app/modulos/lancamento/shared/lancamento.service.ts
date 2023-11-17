import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Lancamento } from './lancamento-model';
import { take } from 'rxjs';
import { LancamentoEntrega } from './lancamento-entrega.model';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private readonly api = `${environment.api}/taskmanager/api/v1`;

  constructor(private http: HttpClient) { }

  public listarLancamentosEntregaAtividade(codigo: string) {
    return this.http.get<LancamentoEntrega[]>(`${this.api}/lancamento/paraLancAtividade/${codigo}`).pipe(
      take(1)
    );
  }

  public gravarLancamento(lancamento: Lancamento[]) {
    return this.http.post(`${this.api}/lancamento`, lancamento).pipe(
      take(1)
    );
  }
}
