import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label!: string;  // Texto do label
  @Output() valueChange = new EventEmitter<number>();  // Evento para emitir o valor inserido

  onValueChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      console.log('Novo valor:', inputElement.value);
    }
  }
}
