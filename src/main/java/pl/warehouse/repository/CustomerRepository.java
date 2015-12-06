package pl.warehouse.repository;

import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

}
