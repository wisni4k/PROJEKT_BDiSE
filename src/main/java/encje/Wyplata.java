package encje;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
/*create table wyplata(
id_wyplata int (5) primary key auto_increment,
id_pracownik int(5),
miesiac varchar(15),
stawka int(5),
ilosc_godz int (5),
pensja_netto int (5) default 0,
pensja_brutto int(5) default 0
);*/



@Entity
@Table(name = "wyplata", uniqueConstraints = { @UniqueConstraint(columnNames = { "id_wyplata" }) })
public class Wyplata {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_wyplata")
	private int id_wyplata;

	@Basic(optional = false)
	@Column(name = "id_pracownik")
	private int id_pracownik;
	

	@Basic(optional = false)
	@Column(name = "miesiac")
	private String miesiac;
	
	@Basic(optional = false)
	@Column(name = "stawka")
	private int stawka;
	
	@Basic(optional = false)
	@Column(name = "ilosc_godz")
	private int ilosc_godz;
	
	@Basic(optional = false)
	@Column(name = "pensja_netto")
	private int pensja_netto;
	
	@Basic(optional = false)
	@Column(name = "pensja_brutto")
	private int pensja_brutto;
	
	////////////relacje////////////
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_pracownik", referencedColumnName = "id_pracownik", nullable = false, insertable = false, updatable = false)
	private Pracownik pracownik;
	
	
	/////////getery setery/////////

	public Pracownik getPracownik() {
		return pracownik;
	}

	public void setPracownik(Pracownik pracownik) {
		this.pracownik = pracownik;
	}

	public int getId_wyplata() {
		return id_wyplata;
	}

	public void setId_wyplata(int id_wyplata) {
		this.id_wyplata = id_wyplata;
	}

	public int getId_pracownik() {
		return id_pracownik;
	}

	public void setId_pracownik(int id_pracownik) {
		this.id_pracownik = id_pracownik;
	}

	public String getMiesiac() {
		return miesiac;
	}

	public void setMiesiac(String miesiac) {
		this.miesiac = miesiac;
	}

	public int getStawka() {
		return stawka;
	}

	public void setStawka(int stawka) {
		this.stawka = stawka;
	}

	public int getIlosc_godz() {
		return ilosc_godz;
	}

	public void setIlosc_godz(int ilosc_godz) {
		this.ilosc_godz = ilosc_godz;
	}

	public int getPensja_netto() {
		return pensja_netto;
	}

	public void setPensja_netto(int pensja_netto) {
		this.pensja_netto = pensja_netto;
	}

	public int getPensja_brutto() {
		return pensja_brutto;
	}

	public void setPensja_brutto(int pensja_brutto) {
		this.pensja_brutto = pensja_brutto;
	}
	
	
	
	
	
	
	

}
