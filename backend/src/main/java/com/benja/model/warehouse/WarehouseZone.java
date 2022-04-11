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
@Table(name = "wms_zone")
public class WarehouseZone {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "wms_zn_id", nullable = false)
    private Long id;

    @Column(name = "wms_zn_name", nullable = false, length = 50)
    private String name;

    @ManyToOne
    @JoinColumn(name = "wms_zn_fk_warehouse")
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn(name = "wms_zn_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "wms_zn_create_date")
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

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
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
