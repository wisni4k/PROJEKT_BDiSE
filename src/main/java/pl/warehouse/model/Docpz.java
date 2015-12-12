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

/*create table DocPZ(
id_DocPZ int(5) primary key auto_increment,
id_customer int(5),
data_przyjecia varchar(50)
);*/
@Entity
@Table(name = "docpz", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_docpz" }) })
public class Docpz {

	@Id
	@Basic(optional = false)
	@Column(name = "id_docpz")
	private int id_docpz;
	
	@Basic(optional = false)
	@Column(name = "id_docpz", insertable = false, updatable = false)
	private int id_dpz;

	@Basic(optional = false)
	@Column(name = "id_customer")
	private int id_customer;

	@Basic(optional = false)
	@Column(name = "data_przyjecia")
	private String data_przyjecia;

	/////////// relacje///////////

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "docpz")
	@Column(nullable = false)
	private List<Docpzpos> docpzpos = new ArrayList<>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_customer", referencedColumnName = "id_customer", nullable = false, insertable = false, updatable = false)
	private Customer customer;

	///////// getery setery/////////
	
	

	public Customer getCustomer() {
		return customer;
	}

	public int getId_dpz() {
		return id_dpz;
	}

	public void setId_dpz(int id_dpz) {
		this.id_dpz = id_dpz;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Docpzpos> getDocpzpos() {
		return docpzpos;
	}

	public void setDocpzpos(List<Docpzpos> docpzpos) {
		this.docpzpos = docpzpos;
	}

	public int getId_docpz() {
		return id_docpz;
	}

	public void setId_docpz(int id_docpz) {
		this.id_docpz = id_docpz;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public String getData_przyjecia() {
		return data_przyjecia;
	}

	public void setData_przyjecia(String data_przyjecia) {
		this.data_przyjecia = data_przyjecia;
	}

}
