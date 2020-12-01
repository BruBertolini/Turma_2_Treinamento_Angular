import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  nome: string;
  idade: number;
  tipo: string;

  constructor() { }

  ngOnInit(): void {
    this.nome = 'Bruna';
    this.idade = 10;
    this.tipo = 'number';
  }

}
