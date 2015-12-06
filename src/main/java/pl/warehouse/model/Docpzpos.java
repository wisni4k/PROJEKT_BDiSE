package pl.warehouse.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/*create table DocPZpos(
id_docpzpos int(5) primary key auto_increment;
id_DocPZ int (5) ,
pozycja int(5),
id_product int (5),
ilosc_palet int(5)
);*/

@Entity
@Table(name = "docpzpos")
public class Docpzpos {

	@Basic(optional = false)
	@Column(name = "id_docpz")
	private int id_docpz;

	@Id
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
	@JoinColumn(name = "id_docpz", referencedColumnName = "id_docpz", nullable = false, insertable = false, updatable = false)
	private Docpz docpz;

	////////// getery setery///////////

	public Docpz getDocpz() {
		return docpz;
	}

	public void setDocpz(Docpz docpz) {
		this.docpz = docpz;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getId_docpz() {
		return id_docpz;
	}

	public void setId_docpz(int id_docpz) {
		this.id_docpz = id_docpz;
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
