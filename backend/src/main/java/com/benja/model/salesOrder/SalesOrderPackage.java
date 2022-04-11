package com.benja.model.salesOrder;

import com.benja.model.security.SecurityUser;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
public class SalesOrderPackage {

    private Long orderNo;
    private Date orderDate;
    private String type;
    private String status;
    private String debtor;
    private String costCentre;
    private String custOrderNo;
    private String releaseNo;
    private String transporter;
    private String street1;
    private String street2;
    private String street3;
    private String street4;
    private String streetPostalCode;
    private String branch;
    private String country;
    private String province;
    private String city;
    private String gps;
    private String oppSName;
    private String oppFName;
    private String oppTitle;
    private String oppCellNo;
    private String oppEmail;
    private String delInstruction;
    private String comments;
    private boolean cancelled;
    private Date cancelledDate;

    private SecurityUser createUser;
    private Date createDate;

    private SecurityUser modUser;
    private Date modDate;

    public Long getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(Long orderNo) {
        this.orderNo = orderNo;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDebtor() {
        return debtor;
    }

    public void setDebtor(String debtor) {
        this.debtor = debtor;
    }

    public String getCostCentre() {
        return costCentre;
    }

    public void setCostCentre(String costCentre) {
        this.costCentre = costCentre;
    }

    public String getCustOrderNo() {
        return custOrderNo;
    }

    public void setCustOrderNo(String custOrderNo) {
        this.custOrderNo = custOrderNo;
    }

    public String getReleaseNo() {
        return releaseNo;
    }

    public void setReleaseNo(String releaseNo) {
        this.releaseNo = releaseNo;
    }

    public String getTransporter() {
        return transporter;
    }

    public void setTransporter(String transporter) {
        this.transporter = transporter;
    }

    public String getStreet1() {
        return street1;
    }

    public void setStreet1(String street1) {
        this.street1 = street1;
    }

    public String getStreet2() {
        return street2;
    }

    public void setStreet2(String street2) {
        this.street2 = street2;
    }

    public String getStreet3() {
        return street3;
    }

    public void setStreet3(String street3) {
        this.street3 = street3;
    }

    public String getStreet4() {
        return street4;
    }

    public void setStreet4(String street4) {
        this.street4 = street4;
    }

    public String getStreetPostalCode() {
        return streetPostalCode;
    }

    public void setStreetPostalCode(String streetPostalCode) {
        this.streetPostalCode = streetPostalCode;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getGps() {
        return gps;
    }

    public void setGps(String gps) {
        this.gps = gps;
    }

    public String getOppSName() {
        return oppSName;
    }

    public void setOppSName(String oppSName) {
        this.oppSName = oppSName;
    }

    public String getOppFName() {
        return oppFName;
    }

    public void setOppFName(String oppFName) {
        this.oppFName = oppFName;
    }

    public String getOppTitle() {
        return oppTitle;
    }

    public void setOppTitle(String oppTitle) {
        this.oppTitle = oppTitle;
    }

    public String getOppCellNo() {
        return oppCellNo;
    }

    public void setOppCellNo(String oppCellNo) {
        this.oppCellNo = oppCellNo;
    }

    public String getOppEmail() {
        return oppEmail;
    }

    public void setOppEmail(String oppEmail) {
        this.oppEmail = oppEmail;
    }

    public String getDelInstruction() {
        return delInstruction;
    }

    public void setDelInstruction(String delInstruction) {
        this.delInstruction = delInstruction;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public boolean isCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancelled) {
        this.cancelled = cancelled;
    }

    public Date getCancelledDate() {
        return cancelledDate;
    }

    public void setCancelledDate(Date cancelledDate) {
        this.cancelledDate = cancelledDate;
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

    public SecurityUser getModUser() {
        return modUser;
    }

    public void setModUser(SecurityUser modUser) {
        this.modUser = modUser;
    }

    public Date getModDate() {
        return modDate;
    }

    public void setModDate(Date modDate) {
        this.modDate = modDate;
    }
}
