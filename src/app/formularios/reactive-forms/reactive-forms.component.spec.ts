import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { MeuServicoService } from '../meu-servico.service';

import { ReactiveFormsComponent } from './reactive-forms.component';

class MockMeuServicoService {
  salvarCadastro() {
    return of(true);
  }
}

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;
  let servico: MeuServicoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormsComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: MeuServicoService, useClass: MockMeuServicoService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    servico = TestBed.inject(MeuServicoService);
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    component.ngOnInit();
    expect(component.form).toBeDefined();
    expect(component.form.get('nomeDoUsuario').value).toEqual('');
  });

  it('should save and alert success when form is valid', () => {
    const spyAlert = spyOn(window,'alert').and.callThrough();
    component.form.patchValue({
      nomeDoUsuario: 'Nome Sobrenome',
      email: 'email@email.com',
      idade: 12,
    });

    component.salvar();

    expect(spyAlert).toHaveBeenCalledWith('Salvou')
  });

  it('should save and alert fail when form is valid', () => {
    const spyAlert = spyOn(window,'alert').and.callThrough();
    const spyServico = spyOn(servico,'salvarCadastro').and.returnValue(throwError(false));
    component.form.patchValue({
      nomeDoUsuario: 'Nome Sobrenome',
      email: 'email@email.com',
      idade: 12,
    });

    component.salvar();

    expect(spyAlert).toHaveBeenCalledWith('Erro')
    expect(spyServico).toHaveBeenCalledWith(component.form.getRawValue());
  });
});
