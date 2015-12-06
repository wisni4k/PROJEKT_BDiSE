package pl.warehouse.repository;

import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Pracownik;

public interface PracownikRepository extends CrudRepository<Pracownik, Integer> {

}
