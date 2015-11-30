package pl.warehouse.repository;

import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {

	// List<Customers> findByCustomerID(@Param("id") String id);

}
