package pl.warehouse.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "miejsce")
public class Miejsce {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_miejsce")
	private int idMiejsce;
	
	@Basic(optional = false)
	@Column(name = "nazwa")
	private String nazwa;

	@JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_users",referencedColumnName="id_users", nullable=false)
    private User user;

	public int getIdMiejsce() {
		return idMiejsce;
	}

	public void setIdMiejsce(int idMiejsce) {
		this.idMiejsce = idMiejsce;
	}


	public String getNazwa() {
		return nazwa;
	}

	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
}
