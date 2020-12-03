import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.scss']
})
export class ListaContasComponent implements OnInit {

  listaContas = [
    { nomeBanco: 'Bradesco', saldo: 10 },
    { nomeBanco: 'Santander', saldo: 100 }
  ];

  contaSantander = 99;

  constructor() { }

  ngOnInit(): void {
  }

  atualizaConta(saldoNovo:number){
    this.listaContas[0].saldo = saldoNovo;
  }

  imprimeEvento(evento){
    console.log(evento);
  }

}
