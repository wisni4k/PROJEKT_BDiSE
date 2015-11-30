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

@Entity
@Table(name = "invoice", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_invoice" }) })
public class Invoice {

	@Id
	@Basic(optional = false)
	@Column(name = "id_invoice")
	private int id_invoice;

	@Basic(optional = false)
	@Column(name = "invoice_price")
	private int invoice_price;

	@Basic(optional = false)
	@Column(name = "id_customer")
	private int id_customer;

	// RELACJE

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_customer", referencedColumnName = "id_customer", nullable = false, insertable = false, updatable = false)
	private Customer customer;

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "invoice")
	@Column(nullable = false)
	private List<Invoiceposition> position = new ArrayList<>();

	// GETTERS SETTERS
	public int getId_invoice() {
		return id_invoice;
	}

	public void setId_invoice(int id_invoice) {
		this.id_invoice = id_invoice;
	}

	public int getInvoice_price() {
		return invoice_price;
	}

	public void setInvoice_price(int invoice_price) {
		this.invoice_price = invoice_price;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Invoiceposition> getPosition() {
		return position;
	}

	public void setPosition(List<Invoiceposition> position) {
		this.position = position;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

}
