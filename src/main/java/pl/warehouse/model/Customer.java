package pl.warehouse.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "customer", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_customer" }) })
public class Customer {

	@Id
	@Basic(optional = false)
	@Column(name = "id_customer")
	private int id_customer;

	@Basic(optional = false)
	@Column(name = "customer_name")
	private String customer_name;

	@Basic(optional = false)
	@Column(name = "customer_adress")
	private String customer_adress;

	// **************** RELACJE ****************

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Invoice> invoice = new ArrayList<>();

	// ****************GETTERS SETTERS ****************
	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getCustomer_adress() {
		return customer_adress;
	}

	public void setCustomer_adress(String customer_adress) {
		this.customer_adress = customer_adress;
	}

}
