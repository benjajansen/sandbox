package com.benja.model.system;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "ssp_transaction_type")
public class SystemTransactionType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ssp_tt_ID", nullable = false)
    private Long id;

    @Column(name = "ssp_tt_name", nullable = false, length = 50)
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
