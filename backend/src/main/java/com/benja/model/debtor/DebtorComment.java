package com.benja.model.debtor;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 27 Jun 2017.
 */
@Entity
@Table(name = "drm_Comment")
public class DebtorComment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_ID", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "drm_fk_Debtor", nullable = false)
    private Debtor debtor;

    @Column(name = "drm_Comment", nullable = false)
    private String comment;

    @Column(name = "drm_ActionDate", nullable = false)
    private Date actionDate;

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

    public Debtor getDebtor() {
        return debtor;
    }

    public void setDebtor(Debtor debtor) {
        this.debtor = debtor;
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
