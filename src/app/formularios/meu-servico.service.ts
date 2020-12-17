import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MeuServicoService {

  baseUrl = 'http://localhost:5000/api/v1'

  constructor(private http: HttpClient) { }

  salvarCadastro(cadastro){
    return this.http.post(this.baseUrl + '/add', cadastro);
  }

  atualizarCadastro(cadastro){
    return this.http.put(this.baseUrl + '/update', cadastro);
  }

  recuperarCadastro(id){
    return this.http.get(this.baseUrl + '/single/' + id );
  }

  removerCadastro(id){
    return this.http.delete(this.baseUrl + '/delete/' + id );
  }

}




