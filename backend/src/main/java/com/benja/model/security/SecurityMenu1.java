package com.benja.model.security;

import javax.persistence.*;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "sec_menu1")
public class SecurityMenu1 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sec_menu1_id", nullable = false)
    private Long id;

    @Column(name = "sec_menu1_name", nullable = false, length = 50)
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
