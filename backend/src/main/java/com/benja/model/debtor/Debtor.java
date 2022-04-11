package com.benja.model.debtor;

import com.benja.model.admin.*;
import com.benja.model.security.SecurityUser;
import com.benja.model.system.SystemPaymentMethod;
import com.benja.model.system.SystemPaymentTerm;
import com.benja.model.system.SystemPaymentType;
import com.benja.model.system.SystemTitle;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "drm_Master")
public class Debtor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_id", nullable = false)
    private Long id;

    @Column(name = "drm_acc_no", nullable = false, length = 30)
    private String accNo;

    @Column(name = "drm_trade_name", nullable = false, length = 60)
    private String tradeName;

    @Column(name = "drm_reg_name", nullable = false, length = 60)
    private String regName;

    @ManyToOne
    @JoinColumn(name = "drm_fk_parent")
    private Debtor parent;

    @Column(name = "drm_comp_reg_no", length = 20)
    private String regNo;

    @Column(name = "drm_vat", length = 15)
    private String vatNo;

    @Column(name = "drm_comp_tel_no", length = 20)
    private String telNo;

    @Column(name = "drm_comp_fax_no", length = 20)
    private String faxNo;

    @Column(name = "drm_website", length = 100)
    private String webSite;

    @Column(name = "drm_street1", length = 50)
    private String street1;

    @Column(name = "drm_street2", length = 50)
    private String street2;

    @Column(name = "drm_street3", length = 50)
    private String street3;

    @Column(name = "drm_street4", length = 50)
    private String street4;

    @Column(name = "drm_str_postal", length = 10)
    private String streetPostalCode;

    @Column(name = "drm_box1", length = 50)
    private String box1;

    @Column(name = "drm_box2", length = 50)
    private String box2;

    @Column(name = "drm_box3", length = 50)
    private String box3;

    @Column(name = "drm_box4", length = 50)
    private String box4;

    @Column(name = "drm_box_postal", length = 10)
    private String boxPostalCode;

    @ManyToOne
    @JoinColumn(name = "drm_fk_bus_unit")
    private DebtorBusinessUnit busUnit;

    @ManyToOne
    @JoinColumn(name = "drm_fk_category")
    private DebtorCategory category;

    @ManyToOne
    @JoinColumn(name = "drm_fk_type_org")
    private DebtorTypeOfOrganisation typeOrg;

    @ManyToOne
    @JoinColumn(name = "drm_fk_bus_type")
    private DebtorBusinessType busType;

    @ManyToOne
    @JoinColumn(name = "drm_fk_branch")
    private AdminBranch branch;

    @ManyToOne
    @JoinColumn(name = "drm_fk_country")
    private AdminCountry country;

    @ManyToOne
    @JoinColumn(name = "drm_fk_province")
    private AdminProvince province;

    @ManyToOne
    @JoinColumn(name = "drm_fk_city")
    private AdminCityTown city;

    @Column(name = "drm_acc_sname", length = 50)
    private String accSName;

    @Column(name = "drm_acc_fname", length = 50)
    private String accFName;

    @ManyToOne
    @JoinColumn(name = "drm_fk_acc_title")
    private SystemTitle accTitle;

    @Column(name = "drm_acc_cell_no", length = 20)
    private String accCellNo;

    @Column(name = "drm_acc_email", length = 100)
    private String accEmail;

    @Column(name = "drm_ops_sname", length = 50)
    private String oppSName;

    @Column(name = "drm_ops_fname", length = 50)
    private String oppFName;

    @ManyToOne
    @JoinColumn(name = "drm_fk_opstitle")
    private SystemTitle oppTitle;

    @Column(name = "drm_ops_cell_no", length = 20)
    private String oppCellNo;

    @Column(name = "drm_ops_email", length = 100)
    private String oppEmail;

    @Column(name = "drm_bank_name", length = 50)
    private String bankName;

    @Column(name = "drm_branch_no", length = 10)
    private String bankBranchNo;

    @Column(name = "drm_bank_acc_no", length = 20)
    private String bankAccNo;

    @Column(name = "drm_bank_acc_name", length = 50)
    private String bankAccName;

    @ManyToOne
    @JoinColumn(name = "drm_fk_pay_term")
    private SystemPaymentTerm payTerm;

    @ManyToOne
    @JoinColumn(name = "drm_fk_pay_method")
    private SystemPaymentMethod payMethod;

    @ManyToOne
    @JoinColumn(name = "drm_fk_pay_type")
    private SystemPaymentType payType;

    @Column(name = "drm_arrear_int")
    private boolean arrearsInt;

    @Column(name = "drm_int_perc", precision = 11, scale = 2)
    private BigDecimal intPerc;

    @Column(name = "drm_start_day")
    private int startDayTime;

    @Column(name = "drm_end_day")
    private int endDayTime;

    @Column(name = "drm_saturdays")
    private boolean saturday;

    @Column(name = "drm_sundays")
    private boolean sunday;

    @Column(name = "drm_holidays")
    private boolean holidays;

    @Column(name = "drm_back_order")
    private boolean backOrder;

    @Column(name = "drm_insured")
    private boolean insured;

    @Column(name = "drm_order_req")
    private boolean orderReq;

    @Column(name = "drm_credit_ref", length = 15)
    private String creditRef;

    @Column(name = "drm_credit_exp_date")
    private Date creditExpDate;

    @Column(name = "drm_credit_amount", precision = 11, scale = 2)
    private BigDecimal creditAmount;

    @Column(name = "drm_credit_available", precision = 11, scale = 2)
    private BigDecimal creditAvail;

    @Column(name = "drm_suspend")
    private boolean suspend;

    @Column(name = "drm_suspend_date")
    private Date suspendDate;

    @ManyToOne
    @JoinColumn(name = "drm_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "drm_create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "drm_fk_modify_user")
    private SecurityUser modUser;

    @CreationTimestamp
    @Column(name = "drm_modified_date")
    private Date modDate;

    @Version
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_version", nullable = false)
    private Long version;

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

    public Debtor getParent() {
        return parent;
    }

    public void setParent(Debtor parent) {
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

    public DebtorBusinessUnit getBusUnit() {
        return busUnit;
    }

    public void setBusUnit(DebtorBusinessUnit busUnit) {
        this.busUnit = busUnit;
    }

    public DebtorCategory getCategory() {
        return category;
    }

    public void setCategory(DebtorCategory category) {
        this.category = category;
    }

    public DebtorTypeOfOrganisation getTypeOrg() {
        return typeOrg;
    }

    public void setTypeOrg(DebtorTypeOfOrganisation typeOrg) {
        this.typeOrg = typeOrg;
    }

    public DebtorBusinessType getBusType() {
        return busType;
    }

    public void setBusType(DebtorBusinessType busType) {
        this.busType = busType;
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

    public AdminProvince getProvince() {
        return province;
    }

    public void setProvince(AdminProvince province) {
        this.province = province;
    }

    public AdminCityTown getCity() {
        return city;
    }

    public void setCity(AdminCityTown city) {
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

    public SystemTitle getAccTitle() {
        return accTitle;
    }

    public void setAccTitle(SystemTitle accTitle) {
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

    public SystemTitle getOppTitle() {
        return oppTitle;
    }

    public void setOppTitle(SystemTitle oppTitle) {
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

    public SystemPaymentTerm getPayTerm() {
        return payTerm;
    }

    public void setPayTerm(SystemPaymentTerm payTerm) {
        this.payTerm = payTerm;
    }

    public SystemPaymentMethod getPayMethod() {
        return payMethod;
    }

    public void setPayMethod(SystemPaymentMethod payMethod) {
        this.payMethod = payMethod;
    }

    public SystemPaymentType getPayType() {
        return payType;
    }

    public void setPayType(SystemPaymentType payType) {
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

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }
}
