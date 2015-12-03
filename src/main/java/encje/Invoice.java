package encje;
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



/*CREATE TABLE Invoice(
id_invoice int(5) primary key auto_increment,
id_customer int(5),
kwota int(50) DEFAULT 0
);
*/
@Entity
@Table(name = "invoice", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_invoice" }) })
public class Invoice {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_invoice")
	private int id_invoice;

	@Basic(optional = false)
	@Column(name = "id_customer")
	private int id_customer;
	
	@Basic(optional = false)
	@Column(name = "kwota")
	private int kwota;


	
	
	///////////relacje////////////
	
	
	
	////////getery setery/////////
	
	
	
	public int getId_invoice() {
		return id_invoice;
	}

	public void setId_invoice(int id_invoice) {
		this.id_invoice = id_invoice;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public int getKwota() {
		return kwota;
	}

	public void setKwota(int kwota) {
		this.kwota = kwota;
	}
	
	

}
