package encje;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/*create table DocWZ(
id_DocWZ int (5) primary key auto_increment,
id_customer int(5),
data_wydania varchar(50)
);*/
@Entity
@Table(name = "docwz", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_docwz" }) })
public class Docwz {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_docwz")
	private int id_docwz;

	@Basic(optional = false)
	@Column(name = "id_customer")
	private int id_customer;
	
	@Basic(optional = false)
	@Column(name = "data_wydania")
	private String data_wydania;
	
	////////////relacje/////////
	
	
	///////////getery setery/////

	public int getId_docwz() {
		return id_docwz;
	}

	public void setId_docwz(int id_docwz) {
		this.id_docwz = id_docwz;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public String getData_wydania() {
		return data_wydania;
	}

	public void setData_wydania(String data_wydania) {
		this.data_wydania = data_wydania;
	}
	
	

}
