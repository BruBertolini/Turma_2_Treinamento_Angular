import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'treinamento-angular';
  nome = '';

  lista = [100,472,282,381];

  validar(){
    console.log(this.nome);
  }

  constructor(private router: Router){
    
  }

  irParaRota(){
    this.router.navigate(['contas'])
  }
}
