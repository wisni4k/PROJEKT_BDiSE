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

@Entity
@Table(name = "product")
public class Product {

	@Id
	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;

	@Basic(optional = false)
	@Column(name = "product_name")
	private String product_name;

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "product")
	@Column(nullable = false)
	private List<Invoiceposition> invoiceposition = new ArrayList<>();

	public int getId_product() {
		return id_product;
	}

	public void setId_product(int id_product) {
		this.id_product = id_product;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public List<Invoiceposition> getInvoiceposition() {
		return invoiceposition;
	}

	public void setInvoiceposition(List<Invoiceposition> invoiceposition) {
		this.invoiceposition = invoiceposition;
	}

}
