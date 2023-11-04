import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Entrega } from './entrega-model';
import { take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private readonly api = `${environment.api}/taskmanager/api/v1`;

  constructor(private http: HttpClient) { }

  public listarEntrega(id: number){
    return this.http.get(`${this.api}/entrega/${id}`).pipe(
      take(1)
    )
  }

  public listarEntregas() {
    return this.http.get<Entrega[]>(`${this.api}/entrega/listarEntregas`).pipe(
      take(1)
    );
  }

  private gravarEntrega(entrega: Entrega) {
    return this.http.post(`${this.api}/entrega`, entrega).pipe(
      take(1)
    );
  }

  private alterarEntrega(entrega: Entrega) {
    return this.http.put(`${this.api}/entrega`, entrega).pipe(
      take(1)
    );
  }

  public salvarAlterarEntrega(entrega: Entrega){
    if(entrega.id > 0){
      return this.alterarEntrega(entrega)
    } else {
      return this.gravarEntrega(entrega);
    }
  }
}
