package encje;

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

import pl.warehouse.model.Customer;
import pl.warehouse.model.Invoice;


/*create table product(
id_product int(5) primary key auto_increment,
nazwa varchar(30),
ilosc int(5)
);*/
@Entity
@Table(name = "product", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_product" }) })
public class Product {
	@Id
	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;

	@Basic(optional = false)
	@Column(name = "nazwa")
	private String nazwa;

	@Basic(optional = false)
	@Column(name = "ilosc")
	private int ilosc;
	
	////////////relacje////////////
	
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Docwzpos> docwzpos = new ArrayList<>();
	
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Paleta> paleta = new ArrayList<>();
	
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Invoiceposition> invoiceposition = new ArrayList<>();
	
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Docpzpos> docpzpos = new ArrayList<>();
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_customer", referencedColumnName = "id_customer", nullable = false, insertable = false, updatable = false)
	private Customer customer;
		
	///////getery setery///////

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Docwzpos> getDocwzpos() {
		return docwzpos;
	}

	public void setDocwzpos(List<Docwzpos> docwzpos) {
		this.docwzpos = docwzpos;
	}

	public List<Paleta> getPaleta() {
		return paleta;
	}

	public void setPaleta(List<Paleta> paleta) {
		this.paleta = paleta;
	}

	public List<Invoiceposition> getInvoiceposition() {
		return invoiceposition;
	}

	public void setInvoiceposition(List<Invoiceposition> invoiceposition) {
		this.invoiceposition = invoiceposition;
	}

	public List<Docpzpos> getDocpzpos() {
		return docpzpos;
	}

	public void setDocpzpos(List<Docpzpos> docpzpos) {
		this.docpzpos = docpzpos;
	}

	public int getId_product() {
		return id_product;
	}

	public void setId_product(int id_product) {
		this.id_product = id_product;
	}

	public String getNazwa() {
		return nazwa;
	}

	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}

	public int getIlosc() {
		return ilosc;
	}

	public void setIlosc(int ilosc) {
		this.ilosc = ilosc;
	}
	
	
	
	
}
