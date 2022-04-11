package com.benja.model.warehouse;

import com.benja.model.admin.AdminBranch;
import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "wms_warehouse")
public class Warehouse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "wms_wh_ID", nullable = false)
    private Long id;

    @Column(name = "wms_wh_name", nullable = false, length = 50)
    private String name;

    @ManyToOne
    @JoinColumn(name = "wms_wh_fk_Branch")
    private AdminBranch branch;

    @ManyToOne
    @JoinColumn(name = "wms_wh_fk_CreateUser")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "wms_wh_CreateDate")
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

    public AdminBranch getBranch() {
        return branch;
    }

    public void setBranch(AdminBranch branch) {
        this.branch = branch;
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
