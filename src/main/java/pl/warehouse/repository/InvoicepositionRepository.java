package pl.warehouse.repository;

import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Invoice;

public interface InvoicepositionRepository extends CrudRepository<Invoice, Integer> {

}
