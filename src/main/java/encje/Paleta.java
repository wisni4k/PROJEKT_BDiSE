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

/*create table paleta(
id_paleta int (5) primary key auto_increment,
id_product int (5),
id_pozycja int (5),
na_magazynie varchar(1)
);*/
@Entity
@Table(name = "paleta", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_paleta" }) })
public class Paleta {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_paleta")
	private int id_paleta;

	@Basic(optional = false)
	@Column(name = "id_product")
	private int id_product;
	
	@Basic(optional = false)
	@Column(name = "id_pozycja")
	private int id_pozycja;
	
	@Basic(optional = false)
	@Column(name = "na_magazynie")
	private String na_magazynie;
	
	
	////////////relacje////////////
	
	
	///////getery setery///////

	public int getId_paleta() {
		return id_paleta;
	}

	public void setId_paleta(int id_paleta) {
		this.id_paleta = id_paleta;
	}

	public int getId_product() {
		return id_product;
	}

	public void setId_product(int id_product) {
		this.id_product = id_product;
	}

	public int getId_pozycja() {
		return id_pozycja;
	}

	public void setId_pozycja(int id_pozycja) {
		this.id_pozycja = id_pozycja;
	}

	public String getNa_magazynie() {
		return na_magazynie;
	}

	public void setNa_magazynie(String na_magazynie) {
		this.na_magazynie = na_magazynie;
	}
	
	
	
	
	
	
	

}
