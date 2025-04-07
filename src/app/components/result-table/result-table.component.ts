import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-table',
  standalone: false,
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss'
})
export class ResultTableComponent {
  @Input() results: { comPlano: number; semPlano: number } | null = null;
}
