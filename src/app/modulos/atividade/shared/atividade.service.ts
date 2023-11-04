import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Atividade } from './atividade-model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private readonly api = `${environment.api}/taskmanager/api/v1`;

  constructor(private http: HttpClient) { }

  public listarAtividades() {
    return this.http.get<Atividade[]>(`${this.api}/atividade/listarAtividades`).pipe(
      take(1)
    );
  }
}
