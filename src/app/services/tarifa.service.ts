import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LigacaoModel } from '../models/ligacao.model';
import { CalcularTarifaModel } from '../models/calcular-tarifa.model';


@Injectable({
  providedIn: 'root'
})
export class TarifaService {
  private apiUrl = 'http://localhost:5000/tarifa/calcular-tarifa';

  constructor(private http: HttpClient) {}

  calcularTarifa(dados: LigacaoModel): Observable<CalcularTarifaModel> {
    return this.http.post<CalcularTarifaModel>(this.apiUrl, dados);
  }
}
