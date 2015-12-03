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

/*create table DocPZ(
id_DocPZ int(5) primary key auto_increment,
id_customer int(5),
data_przyjecia varchar(50)
);*/
@Entity
@Table(name = "docpz", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_docpz" }) })
public class Docpz {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_docpz")
	private int id_docpz;

	@Basic(optional = false)
	@Column(name = "id_customer")
	private int id_customer;
	
	@Basic(optional = false)
	@Column(name = "data_przyjecia")
	private String data_przyjecia;
	
	///////////relacje///////////
	
	
	/////////getery setery/////////

	public int getId_docpz() {
		return id_docpz;
	}

	public void setId_docpz(int id_docpz) {
		this.id_docpz = id_docpz;
	}

	public int getId_customer() {
		return id_customer;
	}

	public void setId_customer(int id_customer) {
		this.id_customer = id_customer;
	}

	public String getData_przyjecia() {
		return data_przyjecia;
	}

	public void setData_przyjecia(String data_przyjecia) {
		this.data_przyjecia = data_przyjecia;
	}
	
	
	
	

}
