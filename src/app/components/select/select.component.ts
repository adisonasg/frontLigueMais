import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() label!: string;  // Texto do label
  @Input() options: string[] = [];  // Opções do dropdown
  @Output() selectionChange = new EventEmitter<string>();  // Evento para emitir o valor selecionado

  onSelectionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      console.log('Opção selecionada:', selectElement.value);
    }
  }
}
