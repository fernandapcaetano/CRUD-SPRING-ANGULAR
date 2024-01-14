package br.com.projeto.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.projeto.api.model.Client;

//Açoes SQL - nome errado para nao haver conflito :((
@Repository
public interface Repositoris extends CrudRepository<Client, Long>{
    
}
