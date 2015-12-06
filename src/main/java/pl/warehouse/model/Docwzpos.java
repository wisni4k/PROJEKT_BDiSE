package pl.warehouse.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/*create table DocWZpos(
id_docWZpos int (5) primary key auto_increment,
id_DocWZ int (5),
pozycja int(5),
id_product int (5),
ilosc_palet int(5)
);*/
@Entity
@Table(name = "docwzpos", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_docwzpos" }) })
public class Docwzpos {

	@Id
	@Basic(optional = false)
	@Column(name = "id_docwzpos")
	private int id_customer;

	@Basic(optional = false)
	@Column(name = "id_docwz")
	private int id_docwz;

	@Basic(optional = false)
	@Column(name = "pozycja")
	private int pozycja;

	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;

	@Basic(optional = false)
	@Column(name = "ilosc_palet")
	private int ilosc_palet;

	//////// relacje////////
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_product", referencedColumnName = "id_product", nullable = false, insertable = false, updatable = false)
	private Product product;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_docwz", referencedColumnName = "id_docwz", nullable = false, insertable = false, updatable = false)
	private Docwz docwz;

	////////// getery setery///////////

	public Docwz getDocwz() {
		return docwz;
	}

	public void setDocwz(Docwz docwz) {
		this.docwz = docwz;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public int getId_docwz() {
		return id_docwz;
	}

	public void setId_docwz(int id_docwz) {
		this.id_docwz = id_docwz;
	}

	public int getPozycja() {
		return pozycja;
	}

	public void setPozycja(int pozycja) {
		this.pozycja = pozycja;
	}

	public int getId_product() {
		return id_product;
	}

	public void setId_product(int id_product) {
		this.id_product = id_product;
	}

	public int getIlosc_palet() {
		return ilosc_palet;
	}

	public void setIlosc_palet(int ilosc_palet) {
		this.ilosc_palet = ilosc_palet;
	}

}
