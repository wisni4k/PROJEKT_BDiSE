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

/*create table DocWZ(
id_DocWZ int (5) primary key auto_increment,
id_customer int(5),
data_wydania varchar(50)
);*/
@Entity
@Table(name = "docwz", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_docwz" }) })
public class Docwz {

	@Id
	@Basic(optional = false)
	@Column(name = "id_docwz")
	private String id_docwz;
	
	@Basic(optional = false)
	@Column(name = "id_docwz", insertable = false, updatable = false)
	private String id_dwz;

	@Basic(optional = false)
	@Column(name = "id_customer")
	private String id_customer;

	@Basic(optional = false)
	@Column(name = "data_wydania")
	private String data_wydania;

	//////////// relacje/////////
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "docwz")
	@Column(nullable = false)
	private List<Docwzpos> docwzpos = new ArrayList<>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_customer", referencedColumnName = "id_customer", nullable = false, insertable = false, updatable = false)
	private Customer customer;

	/////////// getery setery/////
	
	

	public Customer getCustomer() {
		return customer;
	}

	public String getId_dwz() {
		return id_dwz;
	}

	public void setId_dwz(String id_dwz) {
		this.id_dwz = id_dwz;
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

	public String getId_docwz() {
		return id_docwz;
	}

	public void setId_docwz(String id_docwz) {
		this.id_docwz = id_docwz;
	}

	public String getId_customer() {
		return id_customer;
	}

	public void setId_customer(String id_customer) {
		this.id_customer = id_customer;
	}

	public String getData_wydania() {
		return data_wydania;
	}

	public void setData_wydania(String data_wydania) {
		this.data_wydania = data_wydania;
	}

}
