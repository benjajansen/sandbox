package com.benja.model.debtor;

import com.benja.model.admin.AdminBranch;
import com.benja.model.admin.AdminCityTown;
import com.benja.model.admin.AdminCountry;
import com.benja.model.admin.AdminProvince;
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
@Table(name = "drm_cost_centre")
public class DebtorCostCentre {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_cc_id", nullable = false)
    private Long id;

    @Column(name = "drm_cc_number", nullable = false, length = 20)
    private String ccNo;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_acc_no", nullable = false)
    private Debtor debtor;

    @Column(name = "drm_cc_name", nullable = false, length = 50)
    private String name;

    @Column(name = "drm_cc_street1", length = 50)
    private String street1;

    @Column(name = "drm_cc_street2", length = 50)
    private String street2;

    @Column(name = "drm_cc_street3", length = 50)
    private String street3;

    @Column(name = "drm_cc_street4", length = 50)
    private String street4;

    @Column(name = "drm_cc_str_postal", length = 10)
    private String streetPostalCode;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_branch")
    private AdminBranch branch;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_country")
    private AdminCountry country;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_province")
    private AdminProvince province;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_city")
    private AdminCityTown city;

    @Column(name = "drm_cc_gps", length = 150)
    private String gps;

    @Column(name = "drm_cc_ops_sname", length = 50)
    private String oppSName;

    @Column(name = "drm_cc_ops_fname", length = 50)
    private String oppFName;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_opstitle")
    private SystemTitle oppTitle;

    @Column(name = "drm_cc_ops_cell_no", length = 20)
    private String oppCellNo;

    @Column(name = "drm_cc_ops_email", length = 100)
    private String oppEmail;

    @Column(name = "drm_cc_suspended")
    private boolean suspended;

    @Column(name = "drm_cc_Suspend_date")
    private Date suspendDate;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "drm_cc_create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "drm_cc_fk_modify_user")
    private SecurityUser modUser;

    @CreationTimestamp
    @Column(name = "drm_cc_modified_date")
    private Date modDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCcNo() {
        return ccNo;
    }

    public void setCcNo(String ccNo) {
        this.ccNo = ccNo;
    }

    public Debtor getDebtor() {
        return debtor;
    }

    public void setDebtor(Debtor debtor) {
        this.debtor = debtor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public boolean isSuspended() {
        return suspended;
    }

    public void setSuspended(boolean suspended) {
        this.suspended = suspended;
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
}
