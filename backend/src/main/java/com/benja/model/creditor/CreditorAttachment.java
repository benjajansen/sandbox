package com.benja.model.creditor;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 28 Jun 2017.
 */
@Entity
@Table(name = "crm_Attachment")
public class CreditorAttachment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "crm_ID", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "crm_fk_Creditor", nullable = false)
    private Creditor creditor;

    @Column(name = "crm_Name", nullable = false)
    private String name;

    @Column(name = "crm_Description", nullable = false)
    private String description;

    @Column(name = "crm_Version", length = 20)
    private String version;

    @Column(name = "crm_Attachment")
    private String attachment;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public SecurityUser getCreateUser() {
        return createUser;
    }

    public void setCreateUser(SecurityUser createUser) {
        this.createUser = createUser;
    }
}
