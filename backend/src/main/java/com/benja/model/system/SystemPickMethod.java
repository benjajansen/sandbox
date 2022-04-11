package com.benja.model.system;

import javax.persistence.*;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "ssp_pick_method")
public class SystemPickMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ssp_pm_id", nullable = false)
    private Long id;

    @Column(name = "ssp_pm_name", nullable = false, length = 50)
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
