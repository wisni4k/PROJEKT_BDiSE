package pl.warehouse.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "usun", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_usun" }) })
public class Usun {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_usun")
	private int id_usun;
	
	
	@Basic(optional = false)
	@Column(name = "id_pracownik")
	private int id_pracownik;
	
	//////////////////relacje///////////////
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_pracownik", referencedColumnName = "id_pracownik", nullable = false, insertable = false, updatable = false)
	private Pracownik pracownik;

	
	
	//////////////getery setery///////////
	
	public int getId_usun() {
		return id_usun;
	}

	public void setId_usun(int id_usun) {
		this.id_usun = id_usun;
	}

	public int getId_pracownik() {
		return id_pracownik;
	}

	public void setId_pracownik(int id_pracownik) {
		this.id_pracownik = id_pracownik;
	}

	public Pracownik getPracownik() {
		return pracownik;
	}

	public void setPracownik(Pracownik pracownik) {
		this.pracownik = pracownik;
	}
	

}
