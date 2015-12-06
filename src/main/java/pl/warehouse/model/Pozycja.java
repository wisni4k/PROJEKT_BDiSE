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

/*create table pozycja(
id_pozycja int (5) primary key auto_increment,
X int (5),
Y int (5),
Z int(5),
status_pozycja int(5) default 1
);*/
@Entity
@Table(name = "pozycja", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_pozycja" }) })
public class Pozycja {

	@Id
	@Basic(optional = false)
	@Column(name = "id_pozycja")
	private int id_pozycja;

	@Basic(optional = false)
	@Column(name = "x")
	private int x;

	@Basic(optional = false)
	@Column(name = "y")
	private int y;

	@Basic(optional = false)
	@Column(name = "z")
	private int z;

	@Basic(optional = false)
	@Column(name = "status_pozycja")
	private int status_pozycja;

	///////////// default values/////////////

	/*
	 * @PrePersist public void prePersist() { if(this.status_pozycja == null)
	 * //We set default value in case if the value is not set yet.
	 * this.status_pozycja = 1; }
	 */

	/////// nie dziala tak gdy zmienna jest int (null),
	//////// ewentaulnie mozna zmienic na varchar w bazie i tutaj na int///

	//////////// relacje////////////

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "pozycja")
	@Column(nullable = false)
	private List<Paleta> paleta = new ArrayList<>();

	/////// getery setery///////

	public List<Paleta> getPaleta() {
		return paleta;
	}

	public void setPaleta(List<Paleta> paleta) {
		this.paleta = paleta;
	}

	public int getId_pozycja() {
		return id_pozycja;
	}

	public void setId_pozycja(int id_pozycja) {
		this.id_pozycja = id_pozycja;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getZ() {
		return z;
	}

	public void setZ(int z) {
		this.z = z;
	}

	public int getStatus_pozycja() {
		return status_pozycja;
	}

	public void setStatus_pozycja(int status_pozycja) {
		this.status_pozycja = status_pozycja;
	}

}
