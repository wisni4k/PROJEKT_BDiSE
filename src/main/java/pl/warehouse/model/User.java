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

import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "users", uniqueConstraints={ @UniqueConstraint(columnNames={"id_users"})})
public class User {
	
	@Id
	@Basic(optional = false)
	@Column(name = "id_users")
	private int id_users;
	
	@Basic(optional = false)
	@Column(name = "login")
	private String login;
	
	@Basic(optional = false)
	@Column(name = "haslo")
	private String haslo;

	@JsonManagedReference
    @OneToMany(cascade = {CascadeType.ALL,CascadeType.PERSIST,CascadeType.MERGE}, mappedBy = "user")
    @Column(nullable = false)
    private List<Miejsce> miejsce = new ArrayList<>();
	
	public int getId() {
		return id_users;
	}

	public void setId(int id) {
		this.id_users = id;
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

	public List<Miejsce> getMiejsce() {
		return miejsce;
	}

	public void setMiejsce(List<Miejsce> miejsce) {
		this.miejsce = miejsce;
	}
	
	
}
