package encje;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/*create table DocPZpos(
id_DocPZ int (5) ,
pozycja int(5),
id_product int (5),
ilosc_palet int(5)
);*/

@Entity
@Table(name = "docpzpos")
public class Docpzpos {
	
	@Basic(optional = false)
	@Column(name = "id_docpzpos")
	private int id_docpzpos;

	@Basic(optional = false)
	@Column(name = "pozycja")
	private int pozycja;
	
	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;
	
	@Basic(optional = false)
	@Column(name = "ilosc_palet")
	private int ilosc_palet;
	
	////////relacje////////
	
	
	//////////getery setery///////////

	public int getId_docpzpos() {
		return id_docpzpos;
	}

	public void setId_docpzpos(int id_docpzpos) {
		this.id_docpzpos = id_docpzpos;
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
