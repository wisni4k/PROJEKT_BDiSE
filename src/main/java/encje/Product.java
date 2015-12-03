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


/*create table product(
id_product int(5) primary key auto_increment,
nazwa varchar(30),
ilosc int(5)
);*/
@Entity
@Table(name = "product", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_product" }) })
public class Product {
	@Id
	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;

	@Basic(optional = false)
	@Column(name = "nazwa")
	private String nazwa;

	@Basic(optional = false)
	@Column(name = "ilosc")
	private int ilosc;
	
	////////////relacje////////////
		
		
	///////getery setery///////

	public int getId_product() {
		return id_product;
	}

	public void setId_product(int id_product) {
		this.id_product = id_product;
	}

	public String getNazwa() {
		return nazwa;
	}

	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}

	public int getIlosc() {
		return ilosc;
	}

	public void setIlosc(int ilosc) {
		this.ilosc = ilosc;
	}
	
	
	
	
}
