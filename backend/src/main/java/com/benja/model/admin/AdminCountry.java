package com.benja.model.admin;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "asp_Country")
public class AdminCountry {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "asp_ID", nullable = false)
    private Long id;

    @Column(name = "asp_Description", nullable = false, length = 50)
    private String description;

    @ManyToOne
    @JoinColumn(name = "asp_fk_CreateUser")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "asp_CreateDate")
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
