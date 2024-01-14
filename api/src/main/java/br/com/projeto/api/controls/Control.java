package br.com.projeto.api.controls;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.model.Client;
import br.com.projeto.api.repository.Repositoris;

//Definindo como controle, e deixando qualquer porta utilizar a nossa api
@RestController
@CrossOrigin(origins = "*")
public class Control {
    
    //chamando repositorio
    private Repositoris acao;

    public Control(Repositoris acao) {
        this.acao = acao;
    }

    // Cadastrando cliente
    @PostMapping("/")
    public Client cadastrar(@RequestBody Client client){
        return acao.save(client);
    }
    
    //selecionando * clientes
    @GetMapping("/")
    public Iterable<Client> selecionar(){
        return acao.findAll();
    }

    //Alterando cliente
    @PutMapping("/")
    public Client editar(@RequestBody Client client){
        return acao.save(client);
    }

    //Removendo cliente
    @DeleteMapping("/{codigo}")
    public void remover(@PathVariable Long codigo){
        acao.deleteById(codigo);
    }

}
