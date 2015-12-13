package pl.warehouse.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

//import pl.warehouse.model.Invoice;

/*CREATE TABLE Invoice(
id_invoice int(5) primary key auto_increment,
id_customer int(5),
kwota int(50) DEFAULT 0
);
*/
@Entity
@Table(name = "invoice", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_invoice" }) })
public class Invoice {

	@Id
	@Basic(optional = false)
	@Column(name = "id_invoice")
	private int id_invoice;
	
	@Basic(optional = false)
	@Column(name = "id_invoice", insertable = false, updatable = false)
	private int id_faktury;
	
	

	@Basic(optional = false)
	@Column(name = "id_customer")
	private int id_customer;

	@Basic(optional = false)
	@Column(name = "kwota")
	private int kwota;

	@Basic(optional = false)
	@Column(name = "data_wystawienia")
	private String data_wystawienia;
	
	/////////// relacje////////////

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "invoice")
	@Column(nullable = false)
	private List<Invoiceposition> invoiceposition = new ArrayList<>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_customer", referencedColumnName = "id_customer", nullable = false, insertable = false, updatable = false)
	private Customer customer;

	//////// getery setery/////////
	
	

	public Customer getCustomer() {
		return customer;
	}

	public int getId_faktury() {
		return id_faktury;
	}

	public void setId_faktury(int id_faktury) {
		this.id_faktury = id_faktury;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Invoiceposition> getInvoiceposition() {
		return invoiceposition;
	}

	public void setInvoiceposition(List<Invoiceposition> invoiceposition) {
		this.invoiceposition = invoiceposition;
	}

	public int getId_invoice() {
		return id_invoice;
	}

	public void setId_invoice(int id_invoice) {
		this.id_invoice = id_invoice;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public int getKwota() {
		return kwota;
	}

	public void setKwota(int kwota) {
		this.kwota = kwota;
	}

	public String getData_wystawienia() {
		return data_wystawienia;
	}

	public void setData_wystawienia(String data_wystawienia) {
		this.data_wystawienia = data_wystawienia;
	}
	
	

}
