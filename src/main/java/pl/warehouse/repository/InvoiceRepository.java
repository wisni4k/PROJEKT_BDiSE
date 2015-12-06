package pl.warehouse.repository;

import org.springframework.data.repository.CrudRepository;

import pl.warehouse.model.Invoice;

public interface InvoiceRepository extends CrudRepository<Invoice, Integer> {

}
