import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  @Input() valor;
  @Input() nomeBanco;

  @Output() valorChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() valorNegativo: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.valor = this.valor + 10;
    this.valorChange.emit(this.valor);
    this.validaSaldo();
  }

  remover(){
    this.valor = this.valor - 10;
    this.valorChange.emit(this.valor);
    this.validaSaldo();
  }

  validaSaldo(){
    if(this.valor < 0){
      this.valorNegativo.emit(true);
    }else{
      this.valorNegativo.emit(false);
    }
  }

}
