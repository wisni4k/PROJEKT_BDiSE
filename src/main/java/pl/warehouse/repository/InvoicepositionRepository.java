package pl.warehouse.repository;

import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Invoice;
import pl.warehouse.model.Invoiceposition;

public interface InvoicepositionRepository extends CrudRepository<Invoiceposition, Integer> {

}
