import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeuServicoService } from '../meu-servico.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: MeuServicoService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomeDoUsuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', [Validators.required, Validators.min(0)]],
    });
  }

  salvar() {
    console.log(this.form);
    if (this.form.valid) {
      this.service.salvarCadastro(this.form.getRawValue()).subscribe(
        (data) => {
          alert('Salvou');
        },
        (erro) => {
          alert('Erro');
        }
      );
    }
  }
}
