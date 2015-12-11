package pl.warehouse.model;

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
	@Column(name = "nazwa")
	private String nazwa;

	@Basic(optional = false)
	@Column(name = "ilosc_palet")
	private int ilosc_palet;

	//////// relacje////////


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

	

	public String getNazwa() {
		return nazwa;
	}

	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}

	public int getIlosc_palet() {
		return ilosc_palet;
	}

	public void setIlosc_palet(int ilosc_palet) {
		this.ilosc_palet = ilosc_palet;
	}

}
