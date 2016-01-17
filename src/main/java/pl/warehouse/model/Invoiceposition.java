package pl.warehouse.model;

import java.util.ArrayList;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/*CREATE TABLE InvoicePosition(
id_InvoicePosition int(5) primary key auto_increment,
id_invoice int(5),
pozycja int(5),
id_uslugi int(5),
liczba_dni int(5),
id_product int(5),
ilosc_palet int(5),
cena_paleta int(5),
kwota int(50) default 0
);*/
@Entity
@Table(name = "invoiceposition", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_invoiceposition" }) })
public class Invoiceposition {

	@Id
	@Basic(optional = false)
	@Column(name = "id_invoiceposition")
	private int id_invoiceposition;

	@Basic(optional = false)
	@Column(name = "id_invoice")
	private int id_invoice;

	@Basic(optional = false)
	@Column(name = "pozycja")
	private int pozycja;

	@Basic(optional = false)
	@Column(name = "opis_uslugi")
	private String opis_uslugi;

	@Basic(optional = false)
	@Column(name = "liczba_dni")
	private int liczba_dni;

	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;

	@Basic(optional = false)
	@Column(name = "ilosc_palet")
	private int ilosc_palet;

	@Basic(optional = false)
	@Column(name = "cena_paleta")
	private Float cena_paleta;

	@Basic(optional = false)
	@Column(name = "kwota")
	private Float kwota;

	///////////////// relacje/////////////

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_product", referencedColumnName = "id_product", nullable = false, insertable = false, updatable = false)
	private Product product;


	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_invoice", referencedColumnName = "id_invoice", nullable = false, insertable = false, updatable = false)
	private Invoice invoice;
	
	//////////getery setery/////////////
	
	

	public int getId_invoiceposition() {
		return id_invoiceposition;
	}

	public void setId_invoiceposition(int id_invoiceposition) {
		this.id_invoiceposition = id_invoiceposition;
	}

	public int getId_invoice() {
		return id_invoice;
	}

	public void setId_invoice(int id_invoice) {
		this.id_invoice = id_invoice;
	}

	public int getPozycja() {
		return pozycja;
	}

	public void setPozycja(int pozycja) {
		this.pozycja = pozycja;
	}

	

	public int getLiczba_dni() {
		return liczba_dni;
	}

	public void setLiczba_dni(int liczba_dni) {
		this.liczba_dni = liczba_dni;
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

	public Float getCena_paleta() {
		return cena_paleta;
	}

	public void setCena_paleta(Float cena_paleta) {
		this.cena_paleta = cena_paleta;
	}

	public Float getKwota() {
		return kwota;
	}

	public void setKwota(Float kwota) {
		this.kwota = kwota;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	

	public String getOpis_uslugi() {
		return opis_uslugi;
	}

	public void setOpis_uslugi(String opis_uslugi) {
		this.opis_uslugi = opis_uslugi;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

}
