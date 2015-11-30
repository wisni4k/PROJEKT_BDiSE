package pl.warehouse.repository;


import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Miejsce;

public interface MiejsceRepository extends  CrudRepository<Miejsce, Integer> {
	
	//List<Customers> findByCustomerID(@Param("id") String id);

}
