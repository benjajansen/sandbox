package com.benja.model.item;

import com.benja.model.security.SecurityUser;

import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
public class ItemLocationPackage {

    private Long id;
    private String location;
    private String warehouse;
    private String zone;
    private int pickSeq;
    private int putAway;
    private boolean locationHold;
    private int cubeSize;
    private SecurityUser createUser;
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

    public String getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(String warehouse) {
        this.warehouse = warehouse;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
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
