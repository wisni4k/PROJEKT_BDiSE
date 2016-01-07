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
/*CREATE TABLE Customer(
id_customer int(5) primary key auto_increment,
customer_name varchar(20),
contact_name varchar(20),
customer_adress varchar(100),
phone varchar(15),
fax varchar(15),
NIP varchar(15)
);*/

import pl.warehouse.model.Invoice;

@Entity
@Table(name = "customer", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_customer" }) })
public class Customer {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_customer")
	private String id_customer;
	
	@Basic(optional = false)
	@Column(name = "id_customer", insertable = false, updatable = false)
	private String id_cust;
	

	@Basic(optional = false)
	@Column(name = "customer_name")
	private String customer_name;
	
	@Basic(optional = false)
	@Column(name = "contact_name")
	private String contact_name;
	
	@Basic(optional = false)
	@Column(name = "customer_adress")
	private String customer_adress;
	
	@Basic(optional = false)
	@Column(name = "phone")
	private String phone;

	@Basic(optional = false)
	@Column(name = "fax")
	private String fax;
	

	
	
	////////////relacje////////////
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Invoice> invoice = new ArrayList<>();
	

	
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Docwz> docwz = new ArrayList<>();
	
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Docpz> docpz = new ArrayList<>();
	
	

	
	///////getery setery///////
	
	
	public List<Invoice> getInvoice() {
		return invoice;
	}

	public String getId_cust() {
		return id_cust;
	}

	public void setId_cust(String id_cust) {
		this.id_cust = id_cust;
	}

	public void setInvoice(List<Invoice> invoice) {
		this.invoice = invoice;
	}



	public List<Docwz> getDocwz() {
		return docwz;
	}

	public void setDocwz(List<Docwz> docwz) {
		this.docwz = docwz;
	}

	public List<Docpz> getDocpz() {
		return docpz;
	}

	public void setDocpz(List<Docpz> docpz) {
		this.docpz = docpz;
	}

	public String getId_customer() {
		return id_customer;
	}

	public void setId_customer(String id_customer) {
		this.id_customer = id_customer;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getContact_name() {
		return contact_name;
	}

	public void setContact_name(String contact_name) {
		this.contact_name = contact_name;
	}

	public String getCustomer_adress() {
		return customer_adress;
	}

	public void setCustomer_adress(String customer_adress) {
		this.customer_adress = customer_adress;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}


}
