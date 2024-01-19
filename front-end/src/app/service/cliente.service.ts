import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //url da api
  private url:string ='http://localhost:8080';

  constructor(private http:HttpClient) { }

  //selecionar todos os clientes
  selecionar():Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.url);

  }

  //cadastrando
  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj)
  }

  //editando
  editar(obj:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, obj)
  }

  //deletando
  remover(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + "/" + codigo);
  }
}
