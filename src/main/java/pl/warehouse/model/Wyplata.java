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
	private Float stawka;

	@Basic(optional = false)
	@Column(name = "ilosc_godz")
	private int ilosc_godz;
	
	@Basic(optional = false)
	@Column(name = "pensja_brutto")
	private Float pensja_brutto;
	
	@Basic(optional = false)
	@Column(name = "sk_emerytalna")
	private Float sk_emerytalna;
	
	@Basic(optional = false)
	@Column(name = "sk_rentowa")
	private Float sk_rentowa;
	
	@Basic(optional = false)
	@Column(name = "sk_chorobowa")
	private Float sk_chorobowa;
	
	@Basic(optional = false)
	@Column(name = "pod_na_ub_zdr")
	private Float pod_na_ub_zdr;

	@Basic(optional = false)
	@Column(name = "sk_zdrowotne")
	private Float sk_zdrowotne;
	
	@Basic(optional = false)
	@Column(name = "zalicz_podatek_dochodowy")
	private Float zalicz_podatek_dochodowy;
	
	@Basic(optional = false)
	@Column(name = "pensja_netto")
	private Float pensja_netto;


	//////////// relacje////////////

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_pracownik", referencedColumnName = "id_pracownik", nullable = false, insertable = false, updatable = false)
	private Pracownik pracownik;

	///////// getery setery/////////

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

	public Float getStawka() {
		return stawka;
	}

	public void setStawka(Float stawka) {
		this.stawka = stawka;
	}

	public int getIlosc_godz() {
		return ilosc_godz;
	}

	public void setIlosc_godz(int ilosc_godz) {
		this.ilosc_godz = ilosc_godz;
	}

	public Float getPensja_netto() {
		return pensja_netto;
	}

	public void setPensja_netto(Float pensja_netto) {
		this.pensja_netto = pensja_netto;
	}

	public Float getPensja_brutto() {
		return pensja_brutto;
	}

	public void setPensja_brutto(Float pensja_brutto) {
		this.pensja_brutto = pensja_brutto;
	}

	public Float getSk_emerytalna() {
		return sk_emerytalna;
	}

	public void setSk_emerytalna(Float sk_emerytalna) {
		this.sk_emerytalna = sk_emerytalna;
	}

	public Float getSk_rentowa() {
		return sk_rentowa;
	}

	public void setSk_rentowa(Float sk_rentowa) {
		this.sk_rentowa = sk_rentowa;
	}

	public Float getSk_chorobowa() {
		return sk_chorobowa;
	}

	public void setSk_chorobowa(Float sk_chorobowa) {
		this.sk_chorobowa = sk_chorobowa;
	}

	public Float getPod_na_ub_zdr() {
		return pod_na_ub_zdr;
	}

	public void setPod_na_ub_zdr(Float pod_na_ub_zdr) {
		this.pod_na_ub_zdr = pod_na_ub_zdr;
	}

	public Float getSk_zdrowotne() {
		return sk_zdrowotne;
	}

	public void setSk_zdrowotne(Float sk_zdrowotne) {
		this.sk_zdrowotne = sk_zdrowotne;
	}

	public Float getZalicz_podatek_dochodowy() {
		return zalicz_podatek_dochodowy;
	}

	public void setZalicz_podatek_dochodowy(Float zalicz_podatek_dochodowy) {
		this.zalicz_podatek_dochodowy = zalicz_podatek_dochodowy;
	}

	
	
}
