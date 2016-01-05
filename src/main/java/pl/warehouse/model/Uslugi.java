package pl.warehouse.model;

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
	private int id_uslugi;
	
	@Basic(optional = false)
	@Column(name = "id_uslugi", insertable = false, updatable = false)
	private int id_us;

	@Basic(optional = false)
	@Column(name = "opis")
	private String opis;

	//////// relacje//////

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "uslugi")
	@Column(nullable = false)
	private List<Invoiceposition> invoiceposition = new ArrayList<>();

	/////// getery setery////////

	public List<Invoiceposition> getInvoiceposition() {
		return invoiceposition;
	}

	public void setInvoiceposition(List<Invoiceposition> invoiceposition) {
		this.invoiceposition = invoiceposition;
	}

	

	public int getId_uslugi() {
		return id_uslugi;
	}

	public void setId_uslugi(int id_uslugi) {
		this.id_uslugi = id_uslugi;
	}

	public int getId_us() {
		return id_us;
	}

	public void setId_us(int id_us) {
		this.id_us = id_us;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

}
