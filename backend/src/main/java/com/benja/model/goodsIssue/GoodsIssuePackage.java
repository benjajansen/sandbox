package com.benja.model.goodsIssue;

import com.benja.model.security.SecurityUser;

import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
public class GoodsIssuePackage {

    private Long giNo;
    private Date issueDate;
    private String vehReg;
    private String sealNo;
    private SecurityUser createUser;
    private Date createDate;
    private SecurityUser modUser;
    private Date modDate;

    public Long getGiNo() {
        return giNo;
    }

    public void setGiNo(Long giNo) {
        this.giNo = giNo;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public String getVehReg() {
        return vehReg;
    }

    public void setVehReg(String vehReg) {
        this.vehReg = vehReg;
    }

    public String getSealNo() {
        return sealNo;
    }

    public void setSealNo(String sealNo) {
        this.sealNo = sealNo;
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
