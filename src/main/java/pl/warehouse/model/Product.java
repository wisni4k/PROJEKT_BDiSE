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
	@Column(name = "id_product", insertable = false, updatable = false)
	private int id_prod;
	


	@Basic(optional = false)
	@Column(name = "nazwa")
	private String nazwa;

	@Basic(optional = false)
	@Column(name = "ilosc")
	private int ilosc;
	
	@Basic(optional = false)
	@Column(name = "dostawca")
	private String dostawca;
	
	

	//////////// relacje////////////


	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "product")
	@Column(nullable = false)
	private List<Docwzpos> docwzpos = new ArrayList<>();

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "product")
	@Column(nullable = false)
	private List<Paleta> paleta = new ArrayList<>();

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "product")
	@Column(nullable = false)
	private List<Invoiceposition> invoiceposition = new ArrayList<>();




	/////// getery setery///////
	
	
	


	public int getId_prod() {
		return id_prod;
	}

	public String getDostawca() {
		return dostawca;
	}

	public void setDostawca(String dostawca) {
		this.dostawca = dostawca;
	}

	public void setId_prod(int id_prod) {
		this.id_prod = id_prod;
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
