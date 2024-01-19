import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  visibilidadeBotoes:boolean = true;
  visibilidadeTabela: boolean = true;
  clientes:Cliente[] = []
  cliente = new Cliente

  constructor(private servico:ClienteService) { }

  ngOnInit(): void {
    this.selecionar();
  }
  //metodo para selecionar
  selecionar():void{
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno)
  }

    //metodo para cadastrar
    cadastrar():void{
      this.servico.cadastrar(this.cliente)
        .subscribe(retorno => {
          this.clientes.push(retorno);

          //limpar formulário
          this.cliente = new Cliente;
          alert("Cliente cadastrado");
        })
    }

    //selecionar especifico
    selecionarClienteEspecifico(posicao:number):void{
      this.cliente = this.clientes[posicao];
      this.visibilidadeBotoes = false;
      this.visibilidadeTabela = false;

    }

    //metodo para editar
    editar():void{
      this.servico.editar(this.cliente)
        .subscribe(retorno => {
          //obter posicao do cliente
          let posicao = this.clientes.findIndex(obj => {
            return obj.codigo == retorno.codigo
          });
          //alterar os dados
          this.clientes[posicao] = retorno;
          //limpando formulário
          this.cliente = new Cliente;

          this.visibilidadeBotoes = true;
          this.visibilidadeTabela = true;
          alert("Cliente alterado")
        })
    }

    //metodo para remover
    remover():void{
      this.servico.remover(this.cliente.codigo)
        .subscribe(retorno => {
          //obter posicao do cliente
          let posicao = this.clientes.findIndex(obj => {
            return obj.codigo == this.cliente.codigo
          });
          //remover cliente do vetor
          this.clientes.splice(posicao, 1);
          //limpando formulário
          this.cliente = new Cliente;

          this.visibilidadeBotoes = true;
          this.visibilidadeTabela = true;
          alert("Cliente removido")
        })
    }

    cancelar():void{
      //limpa form
      this.cliente = new Cliente();
      this.visibilidadeBotoes = true;
      this.visibilidadeTabela = true;
    }
}
