package com.benja.model.warehouse;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "wms_staff")
public class WarehouseStaff {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "wms_sf_id", nullable = false)
    private Long id;

    @Column(name = "wms_sf_name", nullable = false, length = 50)
    private String name;

    @ManyToOne
    @JoinColumn(name = "wms_sf_fk_title", nullable = false)
    private WarehouseJobTitle jobTitle;

    @Column(name = "wms_sf_suspended")
    private boolean suspend;

    @Column(name = "wms_sf_suspend_date")
    private Date suspendDate;

    @ManyToOne
    @JoinColumn(name = "wms_sf_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "wms_sf_create_date")
    private Date createDate;

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

    public WarehouseJobTitle getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(WarehouseJobTitle jobTitle) {
        this.jobTitle = jobTitle;
    }

    public boolean isSuspend() {
        return suspend;
    }

    public void setSuspend(boolean suspend) {
        this.suspend = suspend;
    }

    public Date getSuspendDate() {
        return suspendDate;
    }

    public void setSuspendDate(Date suspendDate) {
        this.suspendDate = suspendDate;
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
