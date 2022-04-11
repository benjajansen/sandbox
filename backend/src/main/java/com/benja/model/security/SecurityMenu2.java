package com.benja.model.security;

import javax.persistence.*;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "sec_menu2")
public class SecurityMenu2 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sec_menu2_id", nullable = false)
    private Long id;

    @Column(name = "sec_menu2_name", nullable = false, length = 50)
    private String name;

    @ManyToOne
    @JoinColumn(name = "sec_menu2_fk_menu1", nullable = false)
    private SecurityMenu1 menu1;

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

    public SecurityMenu1 getMenu1() {
        return menu1;
    }

    public void setMenu1(SecurityMenu1 menu1) {
        this.menu1 = menu1;
    }
}
