import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


  @NgModule({
    declarations: [],
    imports: [HttpClientModule], 
    exports: [HttpClientModule] // Exporta para ser usado em outros módulos
  })
export class CoreModule { }
