package pl.warehouse.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "invoiceposition")
public class Invoiceposition {
	@Id
	@Basic(optional = false)
	@Column(name = "id_position")
	private int id_position;

	@Basic(optional = false)
	@Column(name = "id_position", insertable = false, updatable = false)
	private int id_pos;

	@Basic(optional = false)
	@Column(name = "id_invoice")
	private int id_invoice;

	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_invoice", referencedColumnName = "id_invoice", nullable = false, insertable = false, updatable = false)
	private Invoice invoice;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_product", referencedColumnName = "id_product", nullable = false, insertable = false, updatable = false)
	private Product product;

	public int getId_position() {
		return id_position;
	}

	public void setId_position(int id_position) {
		this.id_position = id_position;
	}

	public int getId_invoice() {
		return id_invoice;
	}

	public void setId_invoice(int id_invoice) {
		this.id_invoice = id_invoice;
	}

	public int getId_product() {
		return id_product;
	}

	public void setId_product(int id_product) {
		this.id_product = id_product;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getId_pos() {
		return id_pos;
	}

}
