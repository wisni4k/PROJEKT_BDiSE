package pl.warehouse.repository;



import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.User;

public interface UsersRepository extends  CrudRepository<User, Integer> {
	
	//List<Customers> findByCustomerID(@Param("id") String id);

}
