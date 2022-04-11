package com.benja.model.system;

import javax.persistence.*;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "ssp_BEELevel")
public class SystemBEELevel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ssp_ID", nullable = false)
    private Long id;

    @Column(name = "ssp_Description", nullable = false, length = 50)
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
