package com.benja.model.creditor;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 27 Jun 2017.
 */
@Entity
@Table(name = "crm_Comment")
public class CreditorComment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "crm_ID", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "crm_fk_Creditor", nullable = false)
    private Creditor creditor;

    @Column(name = "crm_Comment", nullable = false)
    private String comment;

    @Column(name = "crm_ActionDate", nullable = false)
    private Date actionDate;

    @ManyToOne
    @JoinColumn(name = "crm_fk_CreateUser", nullable = false)
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "crm_CreateDate", nullable = false)
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Creditor getCreditor() {
        return creditor;
    }

    public void setCreditor(Creditor creditor) {
        this.creditor = creditor;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getActionDate() {
        return actionDate;
    }

    public void setActionDate(Date actionDate) {
        this.actionDate = actionDate;
    }

    public SecurityUser getCreateUser() {
        return createUser;
    }

    public void setCreateUser(SecurityUser createUser) {
        this.createUser = createUser;
    }
}
