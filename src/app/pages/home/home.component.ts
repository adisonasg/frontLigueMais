import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarifaService } from '../../services/tarifa.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tarifaForm!: FormGroup;
  resultadoTarifa: { valorComPlano: number; valorSemPlano: number } | null = null;
  isLoading = false;
  erroMensagem: string | null = null;
  sucesso = false;

  constructor(private fb: FormBuilder, private tarifaService: TarifaService) {}

  ngOnInit() {
    this.tarifaForm = this.fb.group({
      origem: ['', Validators.required],
      destino: ['', Validators.required],
      tempo: ['', [Validators.required, Validators.min(1)]],
      plano: ['', Validators.required]
    });
  }

  calcularTarifa() {
    if (this.tarifaForm.valid) {
      this.isLoading = true;
      this.erroMensagem = null;
      this.sucesso = false;

      const dados = {
        origemId: this.getDDDId(this.tarifaForm.value.origem),
        destinoId: this.getDDDId(this.tarifaForm.value.destino),
        minutagemLigacao: Number(this.tarifaForm.value.tempo),
        planoId: this.getPlanoId(this.tarifaForm.value.plano)
      };

      this.tarifaService.calcularTarifa(dados).subscribe({
        next: (res) => {
          console.log('Dados enviados:', dados);
          console.log('Resposta da API:', res);
          this.resultadoTarifa = res;
          this.isLoading = false;
          this.sucesso = true;
        },
        error: (err) => {
          this.isLoading = false;
          this.erroMensagem = 'Erro ao calcular tarifa. Tente novamente mais tarde.';
          console.error(err);
        }
      });
    } else {
      this.tarifaForm.markAllAsTouched();
    }
  }

  private getPlanoId(plano: string | null): number {
    const planos: Record<string, number> = {
      'FaleMais 30': 1,
      'FaleMais 60': 2,
      'FaleMais 120': 3
    };
    return planos[plano as keyof typeof planos] ?? 0;
  }

  private getDDDId(ddd: string): number {
    const ddds: Record<string, number> = {
      '011': 1,
      '016': 2,
      '017': 3,
      '018': 4
    };
    return ddds[ddd as keyof typeof ddds] ?? 0;
  }
}
