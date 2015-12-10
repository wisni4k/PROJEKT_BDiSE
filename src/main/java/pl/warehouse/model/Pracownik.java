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

/*create table pracownik(
id_pracownik int (5) primary key auto_increment,
nazwisko varchar(30),
imie varchar(20),
adres varchar(30),
miasto varchar(30),
kod_pocztowy varchar(10),
kraj varchar(15),
telefon varchar(15),
stanowisko varchar(30)
);*/
@Entity
@Table(name = "pracownik", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_pracownik" }) })
public class Pracownik {

	@Id
	@Basic(optional = false)
	@Column(name = "id_pracownik")
	private int id_pracownik;
	
	@Basic(optional = false)
	@Column(name = "id_pracownik", insertable = false, updatable = false)
	private int id_prac;

	@Basic(optional = false)
	@Column(name = "nazwisko")
	private String nazwisko;

	@Basic(optional = false)
	@Column(name = "imie")
	private String imie;

	@Basic(optional = false)
	@Column(name = "adres")
	private String adres;

	@Basic(optional = false)
	@Column(name = "miasto")
	private String miasto;

	@Basic(optional = false)
	@Column(name = "kod_pocztowy")
	private String kod_pocztowy;

	@Basic(optional = false)
	@Column(name = "kraj")
	private String kraj;

	@Basic(optional = false)
	@Column(name = "telefon")
	private String telefon;

	@Basic(optional = false)
	@Column(name = "stanowisko")
	private String stanowisko;

	////// relacje////////

	@OneToMany(cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "pracownik")
	@Column(nullable = false)
	private List<Wyplata> wyplata = new ArrayList<>();

	public List<Wyplata> getWyplata() {
		return wyplata;
	}

	public void setWyplata(List<Wyplata> wyplata) {
		this.wyplata = wyplata;
	}

	//////// getery setery///////
	public int getId_prac() {
		return id_prac;
	}

	public void setId_prac(int id_prac) {
		this.id_prac = id_prac;
	}

	public int getId_pracownik() {
		return id_pracownik;
	}

	public void setId_pracownik(int id_pracownik) {
		this.id_pracownik = id_pracownik;
	}

	public String getNazwisko() {
		return nazwisko;
	}

	public void setNazwisko(String nazwisko) {
		this.nazwisko = nazwisko;
	}

	public String getImie() {
		return imie;
	}

	public void setImie(String imie) {
		this.imie = imie;
	}

	public String getAdres() {
		return adres;
	}

	public void setAdres(String adres) {
		this.adres = adres;
	}

	public String getMiasto() {
		return miasto;
	}

	public void setMiasto(String miasto) {
		this.miasto = miasto;
	}

	public String getKod_pocztowy() {
		return kod_pocztowy;
	}

	public void setKod_pocztowy(String kod_pocztowy) {
		this.kod_pocztowy = kod_pocztowy;
	}

	public String getKraj() {
		return kraj;
	}

	public void setKraj(String kraj) {
		this.kraj = kraj;
	}

	public String getTelefon() {
		return telefon;
	}

	public void setTelefon(String telefon) {
		this.telefon = telefon;
	}

	public String getStanowisko() {
		return stanowisko;
	}

	public void setStanowisko(String stanowisko) {
		this.stanowisko = stanowisko;
	}

}
