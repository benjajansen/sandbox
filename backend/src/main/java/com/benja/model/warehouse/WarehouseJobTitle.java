package com.benja.model.warehouse;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "wms_job_titles")
public class WarehouseJobTitle {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "wms_jt_ID", nullable = false)
    private Long id;

    @Column(name = "wms_jt_title", nullable = false, length = 50)
    private String title;

    @ManyToOne
    @JoinColumn(name = "wms_jt_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "wms_jt_create_date")
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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
