package com.benja.model.creditor;

import com.benja.model.admin.*;
import com.benja.model.security.SecurityUser;
import com.benja.model.system.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "crm_Master")
public class Creditor {



    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "crm_ID", nullable = false)
    private Long id;

    @Column(name = "crm_AccNo", nullable = false, length = 30)
    private String accNo;

    @Column(name = "crm_TradeName", nullable = false, length = 60)
    private String tradeName;

    @Column(name = "crm_RegName", nullable = false, length = 60)
    private String regName;

    @ManyToOne
    @JoinColumn(name = "crm_fk_parent")
    private Creditor parent;

    @Column(name = "crm_RegNo", length = 20)
    private String regNo;

    @Column(name = "crm_VATVendor")
    private boolean vatVendor;

    @Column(name = "crm_VAT", length = 15)
    private String vatNo;

    @Column(name = "crm_ComTelNo", length = 20)
    private String telNo;

    @Column(name = "crm_ComFaxNo", length = 20)
    private String faxNo;

    @Column(name = "crm_Website", length = 100)
    private String webSite;

    @Column(name = "crm_Street1", length = 50)
    private String street1;

    @Column(name = "crm_Street2", length = 50)
    private String street2;

    @Column(name = "crm_Street3", length = 50)
    private String street3;

    @Column(name = "crm_Street4", length = 50)
    private String street4;

    @Column(name = "crm_StrPostal", length = 10)
    private String streetPostalCode;

    @Column(name = "crm_Box1", length = 50)
    private String box1;

    @Column(name = "crm_Box2", length = 50)
    private String box2;

    @Column(name = "crm_Box3", length = 50)
    private String box3;

    @Column(name = "crm_Box4", length = 50)
    private String box4;

    @Column(name = "crm_BoxPostal", length = 10)
    private String boxPostalCode;

    @ManyToOne
    @JoinColumn(name = "crm_fk_Group")
    private CreditorGroup group;

    @ManyToOne
    @JoinColumn(name = "crm_fk_Classification")
    private CreditorClassification classification;

    @ManyToOne
    @JoinColumn(name = "crm_fk_Branch")
    private AdminBranch branch;

    @ManyToOne
    @JoinColumn(name = "crm_fk_Country")
    private AdminCountry country;

    @ManyToOne
    @JoinColumn(name = "crm_fk_Province")
    private AdminProvince province;

    @ManyToOne
    @JoinColumn(name = "crm_fk_City")
    private AdminCityTown city;

    @Column(name = "crm_AccSName", length = 50)
    private String accSName;

    @Column(name = "crm_AccFName", length = 50)
    private String accFName;

    @ManyToOne
    @JoinColumn(name = "crm_fk_AccTitle")
    private SystemTitle accTitle;

    @Column(name = "crm_AccCellNo", length = 20)
    private String accCellNo;

    @Column(name = "crm_AccEmail", length = 100)
    private String accEmail;

    @Column(name = "crm_OpsSName", length = 50)
    private String oppSName;

    @Column(name = "crm_OpsFName", length = 50)
    private String oppFName;

    @ManyToOne
    @JoinColumn(name = "crm_fk_OpsTitle")
    private SystemTitle oppTitle;

    @Column(name = "crm_OpsCellNo", length = 20)
    private String oppCellNo;

    @Column(name = "crm_OpsEmail", length = 100)
    private String oppEmail;

    @Column(name = "crm_BankName", length = 50)
    private String bankName;

    @Column(name = "crm_BranchNo", length = 10)
    private String bankBranchNo;

    @Column(name = "crm_BankAccNo", length = 20)
    private String bankAccNo;

    @Column(name = "crm_BankAccName", length = 50)
    private String bankAccName;

    @ManyToOne
    @JoinColumn(name = "crm_fk_PayTerm")
    private SystemPaymentTerm payTerm;

    @Column(name = "crm_SettleDiscount", precision = 11, scale = 2)
    private BigDecimal settleDiscount;

    @Column(name = "crm_SettleDays")
    private int settleDays;

    @ManyToOne
    @JoinColumn(name = "crm_fk_SettleDiscMethod")
    private SystemSettleDiscMethod settleDiscMethod;

    @Column(name = "crm_TradeDisc", precision = 11, scale = 2)
    private BigDecimal tradeDisc;

    @ManyToOne
    @JoinColumn(name = "crm_fk_TradeLevel")
    private SystemTradeLevel tradeLevel;

    @ManyToOne
    @JoinColumn(name = "crm_fk_BEEType")
    private SystemBEEType beeType;

    @Column(name = "crm_BEEScore", precision = 11, scale = 2)
    private BigDecimal beeScore;

    @ManyToOne
    @JoinColumn(name = "crm_fk_BEELevel")
    private SystemBEELevel beeLevel;

    @Column(name = "crm_CertificateReceived")
    private boolean beeCertReceived;

    @Column(name = "crm_BEEExpDate")
    private Date beeCertExpDate;

    @Column(name = "crm_Ownership")
    private int beeOwnership;

    @Column(name = "crm_Woman")
    private int beeWoman;

    @Column(name = "crm_Youth")
    private int beeYouth;

    @Column(name = "crm_Disabled")
    private int empDisabled;

    @Column(name = "crm_OrderReq")
    private boolean orderReq;

    @Column(name = "crm_Suspend")
    private boolean suspended;

    @Column(name = "crm_SuspendDate")
    private Date suspendedDate;

    @ManyToOne
    @JoinColumn(name = "crm_fk_CreateUser")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "crm_CreateDate")
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isBeeCertReceived() {
        return beeCertReceived;
    }

    public void setBeeCertReceived(boolean beeCertReceived) {
        this.beeCertReceived = beeCertReceived;
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

    public Creditor getParent() {
        return parent;
    }

    public void setParent(Creditor parent) {
        this.parent = parent;
    }

    public String getRegNo() {
        return regNo;
    }

    public void setRegNo(String regNo) {
        this.regNo = regNo;
    }

    public boolean isVatVendor() {
        return vatVendor;
    }

    public void setVatVendor(boolean vatVendor) {
        this.vatVendor = vatVendor;
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

    public CreditorGroup getGroup() {
        return group;
    }

    public void setGroup(CreditorGroup group) {
        this.group = group;
    }

    public CreditorClassification getClassification() {
        return classification;
    }

    public void setClassification(CreditorClassification classification) {
        this.classification = classification;
    }

    public AdminBranch getBranch() {
        return branch;
    }

    public void setBranch(AdminBranch branch) {
        this.branch = branch;
    }

    public AdminCountry getCountry() {
        return country;
    }

    public void setCountry(AdminCountry country) {
        this.country = country;
    }

    public void setProvince(AdminProvince province) {
        this.province = province;
    }

    public void setCity(AdminCityTown city) {
        this.city = city;
    }

    public SystemTitle getAccTitle() {
        return accTitle;
    }

    public void setAccTitle(SystemTitle accTitle) {
        this.accTitle = accTitle;
    }

    public SystemTitle getOppTitle() {
        return oppTitle;
    }

    public void setOppTitle(SystemTitle oppTitle) {
        this.oppTitle = oppTitle;
    }

    public SystemPaymentTerm getPayTerm() {
        return payTerm;
    }

    public void setPayTerm(SystemPaymentTerm payTerm) {
        this.payTerm = payTerm;
    }

    public void setSettleDiscMethod(SystemSettleDiscMethod settleDiscMethod) {
        this.settleDiscMethod = settleDiscMethod;
    }

    public void setTradeLevel(SystemTradeLevel tradeLevel) {
        this.tradeLevel = tradeLevel;
    }

    public void setBeeType(SystemBEEType beeType) {
        this.beeType = beeType;
    }

    public void setBeeLevel(SystemBEELevel beeLevel) {
        this.beeLevel = beeLevel;
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

    public BigDecimal getSettleDiscount() {
        return settleDiscount;
    }

    public void setSettleDiscount(BigDecimal settleDiscount) {
        this.settleDiscount = settleDiscount;
    }

    public int getSettleDays() {
        return settleDays;
    }

    public void setSettleDays(int settleDays) {
        this.settleDays = settleDays;
    }

    public BigDecimal getTradeDisc() {
        return tradeDisc;
    }

    public void setTradeDisc(BigDecimal tradeDisc) {
        this.tradeDisc = tradeDisc;
    }

    public BigDecimal getBeeScore() {
        return beeScore;
    }

    public void setBeeScore(BigDecimal beeScore) {
        this.beeScore = beeScore;
    }

    public Date getBeeCertExpDate() {
        return beeCertExpDate;
    }

    public void setBeeCertExpDate(Date beeCertExpDate) {
        this.beeCertExpDate = beeCertExpDate;
    }

    public int getBeeOwnership() {
        return beeOwnership;
    }

    public void setBeeOwnership(int beeOwnership) {
        this.beeOwnership = beeOwnership;
    }

    public int getBeeWoman() {
        return beeWoman;
    }

    public void setBeeWoman(int beeWoman) {
        this.beeWoman = beeWoman;
    }

    public int getBeeYouth() {
        return beeYouth;
    }

    public void setBeeYouth(int beeYouth) {
        this.beeYouth = beeYouth;
    }

    public int getEmpDisabled() {
        return empDisabled;
    }

    public void setEmpDisabled(int empDisabled) {
        this.empDisabled = empDisabled;
    }

    public boolean isOrderReq() {
        return orderReq;
    }

    public void setOrderReq(boolean orderReq) {
        this.orderReq = orderReq;
    }

    public boolean isSuspended() {
        return suspended;
    }

    public void setSuspended(boolean suspended) {
        this.suspended = suspended;
    }

    public Date getSuspendedDate() {
        return suspendedDate;
    }

    public void setSuspendedDate(Date suspendedDate) {
        this.suspendedDate = suspendedDate;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public SecurityUser getCreateUser() {
        return createUser;
    }

    public void setCreateUser(SecurityUser createUser) {
        this.createUser = createUser;
    }

    public AdminProvince getProvince() {
        return province;
    }

    public AdminCityTown getCity() {
        return city;
    }

    public SystemSettleDiscMethod getSettleDiscMethod() {
        return settleDiscMethod;
    }

    public SystemTradeLevel getTradeLevel() {
        return tradeLevel;
    }

    public SystemBEEType getBeeType() {
        return beeType;
    }

    public SystemBEELevel getBeeLevel() {
        return beeLevel;
    }
}
