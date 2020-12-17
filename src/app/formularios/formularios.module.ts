import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeuServicoService } from './meu-servico.service';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule
    ],
  exports:[
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
  providers:[
    MeuServicoService
  ]
})
export class FormulariosModule {}
