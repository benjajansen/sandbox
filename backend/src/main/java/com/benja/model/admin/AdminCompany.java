package com.benja.model.admin;

import com.benja.model.file.FileLink;

import javax.persistence.*;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "asp_Company")
public class AdminCompany {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "asp_id", nullable = false)
    private Long id;

    @Column(name = "asp_reg_name", nullable = false, length = 100)
    private String regName;

    @Column(name = "asp_trade_name", length = 100)
    private String tradeName;

    @Column(name = "asp_reg_no", nullable = false, length = 20)
    private String regNo;

    @Column(name = "asp_vat", length = 15)
    private String vatNo;

    @Column(name = "asp_com_tel_no", length = 20)
    private String telNo;

    @Column(name = "asp_com_fax_no", length = 20)
    private String faxNo;

    @Column(name = "asp_website", length = 100)
    private String webSite;

    @Column(name = "asp_street1", length = 50)
    private String street1;

    @Column(name = "asp_street2", length = 50)
    private String street2;

    @Column(name = "asp_street3", length = 50)
    private String street3;

    @Column(name = "asp_street4", length = 50)
    private String street4;

    @Column(name = "asp_str_postal", length = 10)
    private String streetPostalCode;

    @Column(name = "asp_box1", length = 50)
    private String box1;

    @Column(name = "asp_box2", length = 50)
    private String box2;

    @Column(name = "asp_box3", length = 50)
    private String box3;

    @Column(name = "asp_box4", length = 50)
    private String box4;

    @Column(name = "asp_box_postal", length = 10)
    private String boxPostalCode;

    @ManyToOne
    @JoinColumn(name = "asp_fk_country")
    private AdminCountry country;

    @Column(name = "asp_bank_name", length = 50)
    private String bankName;

    @Column(name = "asp_branch_no", length = 10)
    private String bankBranchNo;

    @Column(name = "asp_bank_acc_name", length = 100)
    private String bankAccName;

    @Column(name = "asp_bank_acc_no", length = 20)
    private String bankAccNo;

    @ManyToOne
    @JoinColumn(name = "asp_fk_logo")
    private FileLink logo;

    @Column(name = "asp_Headercolour", length = 20)
    private String headerColour;

    @Column(name = "asp_HFontcolour", length = 20)
    private String hFontColour;

    @Column(name = "asp_Bodycolour", length = 20)
    private String bodyColour;

    @Column(name = "asp_BFontcolour", length = 20)
    private String bFontColour;

    @Column(name = "asp_tempprefix", length = 20)
    private String tempPrefix;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegName() {
        return regName;
    }

    public void setRegName(String regName) {
        this.regName = regName;
    }

    public String getTradeName() {
        return tradeName;
    }

    public void setTradeName(String tradeName) {
        this.tradeName = tradeName;
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

    public AdminCountry getCountry() {
        return country;
    }

    public void setCountry(AdminCountry country) {
        this.country = country;
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

    public String getBankAccName() {
        return bankAccName;
    }

    public void setBankAccName(String bankAccName) {
        this.bankAccName = bankAccName;
    }

    public String getBankAccNo() {
        return bankAccNo;
    }

    public void setBankAccNo(String bankAccNo) {
        this.bankAccNo = bankAccNo;
    }

    public FileLink getLogo() {
        return logo;
    }

    public void setLogo(FileLink logo) {
        this.logo = logo;
    }

    public String getHeaderColour() {
        return headerColour;
    }

    public void setHeaderColour(String headerColour) {
        this.headerColour = headerColour;
    }

    public String gethFontColour() {
        return hFontColour;
    }

    public void sethFontColour(String hFontColour) {
        this.hFontColour = hFontColour;
    }

    public String getBodyColour() {
        return bodyColour;
    }

    public void setBodyColour(String bodyColour) {
        this.bodyColour = bodyColour;
    }

    public String getbFontColour() {
        return bFontColour;
    }

    public void setbFontColour(String bFontColour) {
        this.bFontColour = bFontColour;
    }

    public String getTempPrefix() {
        return tempPrefix;
    }

    public void setTempPrefix(String tempPrefix) {
        this.tempPrefix = tempPrefix;
    }
}
