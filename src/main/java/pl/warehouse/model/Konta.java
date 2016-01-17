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
@Table(name = "konta", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_konta" }) })
public class Konta {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_konta")
	private int id_konta;
	
	@Basic(optional = false)
	@Column(name = "login")
	private String login;
	
	@Basic(optional = false)
	@Column(name = "haslo")
	private String haslo;
	
	@Basic(optional = false)
	@Column(name = "uprawnienia")
	private String uprawnienia;
	
	@Basic(optional = false)
	@Column(name = "id_pracownik")
	private int id_pracownik;
	
	@Basic(optional = false)
	@Column(name = "status_konta")
	private int status_konta=1;
	
	
	////////////relacje//////////////////
	

	////////////getery i setery/////////////
	
	
	
	public int getId_konta() {
		return id_konta;
	}


	public void setId_konta(int id_konta) {
		this.id_konta = id_konta;
	}


	public String getLogin() {
		return login;
	}


	public void setLogin(String login) {
		this.login = login;
	}


	public String getHaslo() {
		return haslo;
	}


	public void setHaslo(String haslo) {
		this.haslo = haslo;
	}


	public String getUprawnienia() {
		return uprawnienia;
	}


	public void setUprawnienia(String uprawnienia) {
		this.uprawnienia = uprawnienia;
	}


	public int getId_pracownik() {
		return id_pracownik;
	}


	public void setId_pracownik(int id_pracownik) {
		this.id_pracownik = id_pracownik;
	}


	public int getStatus_konta() {
		return status_konta;
	}


	public void setStatus_konta(int status_konta) {
		this.status_konta = status_konta;
	}




}
