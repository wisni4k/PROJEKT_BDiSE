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
@Entity
@Table(name = "uslugi", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_uslugi" }) })
public class Uslugi {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_uslugi")
	private int id_customer;

	@Basic(optional = false)
	@Column(name = "opis")
	private String opis;
	
	////////relacje//////
	
	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "customer")
	@Column(nullable = false)
	private List<Invoiceposition> invoiceposition = new ArrayList<>();
	
	
	///////getery setery////////

	public List<Invoiceposition> getInvoiceposition() {
		return invoiceposition;
	}

	public void setInvoiceposition(List<Invoiceposition> invoiceposition) {
		this.invoiceposition = invoiceposition;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
	
	

}
