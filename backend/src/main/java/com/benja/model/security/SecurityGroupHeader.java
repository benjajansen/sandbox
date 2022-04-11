package com.benja.model.security;

import javax.persistence.*;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "sec_group_header")
public class SecurityGroupHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sec_gph_id", nullable = false)
    private Long id;

    @Column(name = "sec_gph_name", nullable = false, length = 50)
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
