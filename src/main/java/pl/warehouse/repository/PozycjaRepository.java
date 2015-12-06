package pl.warehouse.repository;

import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Pozycja;

public interface PozycjaRepository extends CrudRepository<Pozycja, Integer> {

}
