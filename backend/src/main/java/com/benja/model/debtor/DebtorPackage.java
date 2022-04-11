package com.benja.model.debtor;

import com.benja.model.security.SecurityUser;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 * This class is used to minimize the size of the JSON package sent between Backend and Frontend
 */
public class DebtorPackage {

    private Long id;

    private String accNo;
    private String tradeName;
    private String regName;

    private String parent;
    private String regNo;
    private String vatNo;
    private String telNo;
    private String faxNo;

    private String webSite;

    private String street1;
    private String street2;
    private String street3;
    private String street4;
    private String streetPostalCode;

    private String box1;
    private String box2;
    private String box3;
    private String box4;
    private String boxPostalCode;

    private String busUnit;
    private String category;
    private String typeOrg;
    private String busType;

    private String branch;
    private String country;
    private String province;
    private String city;

    private String accSName;
    private String accFName;
    private String accTitle;
    private String accCellNo;
    private String accEmail;

    private String oppSName;
    private String oppFName;
    private String oppTitle;
    private String oppCellNo;
    private String oppEmail;

    private String bankName;
    private String bankBranchNo;
    private String bankAccNo;
    private String bankAccName;

    private String payTerm;
    private String payMethod;
    private String payType;

    private boolean arrearsInt;
    private BigDecimal intPerc;

    private int startDayTime;
    private int endDayTime;

    private boolean saturday;
    private boolean sunday;
    private boolean holidays;
    private boolean backOrder;
    private boolean insured;

    private boolean orderReq;
    private String creditRef;

    private Date creditExpDate;
    private BigDecimal creditAmount;
    private BigDecimal creditAvail;

    private boolean suspend;
    private Date suspendDate;

    private SecurityUser createUser;
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccNo() {
        return accNo;
    }

    public void setAccNo(String accNo) {
        this.accNo = accNo;
    }

    public String getTradeName() {
        return tradeName;
    }

    public void setTradeName(String tradeName) {
        this.tradeName = tradeName;
    }

    public String getRegName() {
        return regName;
    }

    public void setRegName(String regName) {
        this.regName = regName;
    }

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public String getRegNo() {
        return regNo;
    }

    public void setRegNo(String regNo) {
        this.regNo = regNo;
    }

    public String getVatNo() {
        return vatNo;
    }

    public void setVatNo(String vatNo) {
        this.vatNo = vatNo;
    }

    public String getTelNo() {
        return telNo;
    }

    public void setTelNo(String telNo) {
        this.telNo = telNo;
    }

    public String getFaxNo() {
        return faxNo;
    }

    public void setFaxNo(String faxNo) {
        this.faxNo = faxNo;
    }

    public String getWebSite() {
        return webSite;
    }

    public void setWebSite(String webSite) {
        this.webSite = webSite;
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

    public String getBox1() {
        return box1;
    }

    public void setBox1(String box1) {
        this.box1 = box1;
    }

    public String getBox2() {
        return box2;
    }

    public void setBox2(String box2) {
        this.box2 = box2;
    }

    public String getBox3() {
        return box3;
    }

    public void setBox3(String box3) {
        this.box3 = box3;
    }

    public String getBox4() {
        return box4;
    }

    public void setBox4(String box4) {
        this.box4 = box4;
    }

    public String getBoxPostalCode() {
        return boxPostalCode;
    }

    public void setBoxPostalCode(String boxPostalCode) {
        this.boxPostalCode = boxPostalCode;
    }

    public String getBusUnit() {
        return busUnit;
    }

    public void setBusUnit(String busUnit) {
        this.busUnit = busUnit;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTypeOrg() {
        return typeOrg;
    }

    public void setTypeOrg(String typeOrg) {
        this.typeOrg = typeOrg;
    }

    public String getBusType() {
        return busType;
    }

    public void setBusType(String busType) {
        this.busType = busType;
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

    public String getAccSName() {
        return accSName;
    }

    public void setAccSName(String accSName) {
        this.accSName = accSName;
    }

    public String getAccFName() {
        return accFName;
    }

    public void setAccFName(String accFName) {
        this.accFName = accFName;
    }

    public String getAccTitle() {
        return accTitle;
    }

    public void setAccTitle(String accTitle) {
        this.accTitle = accTitle;
    }

    public String getAccCellNo() {
        return accCellNo;
    }

    public void setAccCellNo(String accCellNo) {
        this.accCellNo = accCellNo;
    }

    public String getAccEmail() {
        return accEmail;
    }

    public void setAccEmail(String accEmail) {
        this.accEmail = accEmail;
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

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankBranchNo() {
        return bankBranchNo;
    }

    public void setBankBranchNo(String bankBranchNo) {
        this.bankBranchNo = bankBranchNo;
    }

    public String getBankAccNo() {
        return bankAccNo;
    }

    public void setBankAccNo(String bankAccNo) {
        this.bankAccNo = bankAccNo;
    }

    public String getBankAccName() {
        return bankAccName;
    }

    public void setBankAccName(String bankAccName) {
        this.bankAccName = bankAccName;
    }

    public String getPayTerm() {
        return payTerm;
    }

    public void setPayTerm(String payTerm) {
        this.payTerm = payTerm;
    }

    public String getPayMethod() {
        return payMethod;
    }

    public void setPayMethod(String payMethod) {
        this.payMethod = payMethod;
    }

    public String getPayType() {
        return payType;
    }

    public void setPayType(String payType) {
        this.payType = payType;
    }

    public boolean isArrearsInt() {
        return arrearsInt;
    }

    public void setArrearsInt(boolean arrearsInt) {
        this.arrearsInt = arrearsInt;
    }

    public BigDecimal getIntPerc() {
        return intPerc;
    }

    public void setIntPerc(BigDecimal intPerc) {
        this.intPerc = intPerc;
    }

    public int getStartDayTime() {
        return startDayTime;
    }

    public void setStartDayTime(int startDayTime) {
        this.startDayTime = startDayTime;
    }

    public int getEndDayTime() {
        return endDayTime;
    }

    public void setEndDayTime(int endDayTime) {
        this.endDayTime = endDayTime;
    }

    public boolean isSaturday() {
        return saturday;
    }

    public void setSaturday(boolean saturday) {
        this.saturday = saturday;
    }

    public boolean isSunday() {
        return sunday;
    }

    public void setSunday(boolean sunday) {
        this.sunday = sunday;
    }

    public boolean isHolidays() {
        return holidays;
    }

    public void setHolidays(boolean holidays) {
        this.holidays = holidays;
    }

    public boolean isBackOrder() {
        return backOrder;
    }

    public void setBackOrder(boolean backOrder) {
        this.backOrder = backOrder;
    }

    public boolean isInsured() {
        return insured;
    }

    public void setInsured(boolean insured) {
        this.insured = insured;
    }

    public boolean isOrderReq() {
        return orderReq;
    }

    public void setOrderReq(boolean orderReq) {
        this.orderReq = orderReq;
    }

    public String getCreditRef() {
        return creditRef;
    }

    public void setCreditRef(String creditRef) {
        this.creditRef = creditRef;
    }

    public Date getCreditExpDate() {
        return creditExpDate;
    }

    public void setCreditExpDate(Date creditExpDate) {
        this.creditExpDate = creditExpDate;
    }

    public BigDecimal getCreditAmount() {
        return creditAmount;
    }

    public void setCreditAmount(BigDecimal creditAmount) {
        this.creditAmount = creditAmount;
    }

    public BigDecimal getCreditAvail() {
        return creditAvail;
    }

    public void setCreditAvail(BigDecimal creditAvail) {
        this.creditAvail = creditAvail;
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
