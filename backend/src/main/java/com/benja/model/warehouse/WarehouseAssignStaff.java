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
@Table(name = "wms_assign_staff")
public class WarehouseAssignStaff {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "wms_as_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "wms_as_fk_name", nullable = false)
    private WarehouseStaff warehouseStaff;

    @ManyToOne
    @JoinColumn(name = "wms_as_fk_zone", nullable = false)
    private WarehouseZone warehouseZone;
    
    @ManyToOne
    @JoinColumn(name = "wms_as_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "wms_as_create_date")
    private Date createDate;

    @Column(name = "wms_as_mod_date")
    private Date modDate;

    @ManyToOne
    @JoinColumn(name = "wms_as_fk_mod_user")
    private SecurityUser modUser;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public WarehouseStaff getWarehouseStaff() {
        return warehouseStaff;
    }

    public void setWarehouseStaff(WarehouseStaff warehouseStaff) {
        this.warehouseStaff = warehouseStaff;
    }

    public WarehouseZone getWarehouseZone() {
        return warehouseZone;
    }

    public void setWarehouseZone(WarehouseZone warehouseZone) {
        this.warehouseZone = warehouseZone;
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

    public Date getModDate() {
        return modDate;
    }

    public void setModDate(Date modDate) {
        this.modDate = modDate;
    }

    public SecurityUser getModUser() {
        return modUser;
    }

    public void setModUser(SecurityUser modUser) {
        this.modUser = modUser;
    }
}
