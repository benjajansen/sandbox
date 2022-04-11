package com.benja.model.item;

import com.benja.model.warehouse.Warehouse;
import com.benja.model.security.SecurityUser;
import com.benja.model.warehouse.WarehouseZone;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "itm_Location")
public class ItemLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_id", nullable = false)
    private Long id;

    @Column(name = "itm_location", nullable = false, length = 15)
    private String location;

    @ManyToOne
    @JoinColumn(name = "itm_fk_warehouse")
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn(name = "itm_fk_zone")
    private WarehouseZone zone;

    @Column(name = "itm_pickseq", nullable = false)
    private int pickSeq;

    @Column(name = "itm_putawayseq", nullable = false)
    private int putAway;

    @Column(name = "itm_locationhold")
    private boolean locationHold;

    @Column(name = "itm_cubesize", nullable = false)
    private int cubeSize;

    @ManyToOne
    @JoinColumn(name = "itm_fk_CreateUser")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "itm_CreateDate")
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public WarehouseZone getZone() {
        return zone;
    }

    public void setZone(WarehouseZone zone) {
        this.zone = zone;
    }

    public int getPickSeq() {
        return pickSeq;
    }

    public void setPickSeq(int pickSeq) {
        this.pickSeq = pickSeq;
    }

    public int getPutAway() {
        return putAway;
    }

    public void setPutAway(int putAway) {
        this.putAway = putAway;
    }

    public boolean isLocationHold() {
        return locationHold;
    }

    public void setLocationHold(boolean locationHold) {
        this.locationHold = locationHold;
    }

    public int getCubeSize() {
        return cubeSize;
    }

    public void setCubeSize(int cubeSize) {
        this.cubeSize = cubeSize;
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
