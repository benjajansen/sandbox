package com.benja.model.item;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "itm_Category")
public class ItemCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_ID", nullable = false)
    private Long id;

    @Column(name = "itm_Description", nullable = false, length = 50)
    private String description;

    @ManyToOne
    @JoinColumn(name = "itm_fk_CreateUser")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "itm_CreateDate")
    private Date createDate;

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

    public SecurityUser getCreateUser() {
        return createUser;
    }

    public void setCreateUser(SecurityUser createUser) {
        this.createUser = createUser;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }
}
