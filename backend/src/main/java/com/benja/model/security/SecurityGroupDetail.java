package com.benja.model.security;

import javax.persistence.*;

/**
 * Created by Benja on 4/16/2017.
 */
@Entity
@Table(name = "sec_group_detail")
public class SecurityGroupDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sec_gpd_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sec_gpd_fk_header", nullable = false)
    private SecurityGroupHeader header;

    @ManyToOne
    @JoinColumn(name = "sec_gpd_fk_menu1", nullable = false)
    private SecurityMenu1 menu1;

    @ManyToOne
    @JoinColumn(name = "sec_gpd_fk_menu2")
    private SecurityMenu2 menu2;

    @ManyToOne
    @JoinColumn(name = "sec_gpd_fk_menu3")
    private SecurityMenu3 menu3;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SecurityGroupHeader getHeader() {
        return header;
    }

    public void setHeader(SecurityGroupHeader header) {
        this.header = header;
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

    public SecurityMenu3 getMenu3() {
        return menu3;
    }

    public void setMenu3(SecurityMenu3 menu3) {
        this.menu3 = menu3;
    }
}
