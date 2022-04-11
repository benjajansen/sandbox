package com.benja.model.debtor;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 29 Jun 2017.
 */
@Entity
@Table(name = "drm_Category")
public class DebtorCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_ID", nullable = false)
    private Long id;

    @Column(name = "drm_Description", nullable = false, length = 50)
    private String description;

    @ManyToOne
    @JoinColumn(name = "drm_fk_CreateUser", nullable = false)
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "drm_CreateDate", nullable = false)
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
