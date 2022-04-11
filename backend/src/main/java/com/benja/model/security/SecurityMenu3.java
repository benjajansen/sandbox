package com.benja.model.security;

import javax.persistence.*;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "sec_menu3")
public class SecurityMenu3 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sec_menu3_id", nullable = false)
    private Long id;

    @Column(name = "sec_menu3_name", nullable = false, length = 50)
    private String name;

    @ManyToOne
    @JoinColumn(name = "sec_menu3_fk_menu1", nullable = false)
    private SecurityMenu1 menu1;

    @ManyToOne
    @JoinColumn(name = "sec_menu3_fk_menu2", nullable = false)
    private SecurityMenu2 menu2;

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

    public SecurityMenu2 getMenu2() {
        return menu2;
    }

    public void setMenu2(SecurityMenu2 menu2) {
        this.menu2 = menu2;
    }
}
