import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
     ReactiveFormsModule
    ],
  exports:[
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
})
export class FormulariosModule {}
