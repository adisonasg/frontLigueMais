import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  private apiUrl = 'http://localhost:5000/tarifa/calcular-tarifa';

  constructor(private http: HttpClient) {}

  calcularTarifa(dados: { planoId: number; origemId: number; destinoId: number; minutagemLigacao: number }): Observable<{ valorComPlano: number; valorSemPlano: number }> {
    return this.http.post<{ valorComPlano: number; valorSemPlano: number }>(this.apiUrl, dados);
  }
}
