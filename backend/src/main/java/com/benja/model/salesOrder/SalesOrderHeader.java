package com.benja.model.salesOrder;

import com.benja.model.admin.*;
import com.benja.model.debtor.Debtor;
import com.benja.model.debtor.DebtorCostCentre;
import com.benja.model.security.SecurityUser;
import com.benja.model.system.*;
import com.benja.model.warehouse.Warehouse;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "drm_sales_order_header")
public class SalesOrderHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_soh_id", nullable = false)
    private Long id;

    @Column(name = "drm_soh_date", nullable = false)
    private Date orderDate;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_status", nullable = false)
    private SystemStatus status;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_customer", nullable = false)
    private Debtor debtor;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_cost_centre", nullable = false)
    private DebtorCostCentre costCentre;

    @Column(name = "drm_soh_order_no", length = 50)
    private String custOrderNo;

    @Column(name = "drm_soh_release_no", length = 50)
    private String releaseNo;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_transporter")
    private AdminTransporter transporter;

    @Column(name = "drm_soh_street1", length = 50)
    private String street1;

    @Column(name = "drm_soh_street2", length = 50)
    private String street2;

    @Column(name = "drm_soh_street3", length = 50)
    private String street3;

    @Column(name = "drm_soh_street4", length = 50)
    private String street4;

    @Column(name = "drm_soh_str_postal", length = 10)
    private String streetPostalCode;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_Warehouse")
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_City")
    private AdminCityTown city;

    @Column(name = "drm_soh_gps", length = 150)
    private String gps;

    @Column(name = "drm_soh_ops_surname", length = 50)
    private String oppSName;

    @Column(name = "drm_soh_ops_first_name", length = 50)
    private String oppFName;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_ops_title")
    private SystemTitle oppTitle;

    @Column(name = "drm_soh_ops_cell_no", length = 20)
    private String oppCellNo;

    @Column(name = "drm_soh_ops_email", length = 100)
    private String oppEmail;

    @Column(name = "drm_soh_del_instructions")
    private String delInstructions;

    @Column(name = "drm_soh_comments")
    private String comments;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "drm_soh_create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "drm_soh_fk_mod_user")
    private SecurityUser modUser;

    @Column(name = "drm_soh_mod_date")
    private Date modDate;

    @Version
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_soh_version", nullable = false)
    private Long version;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public SystemStatus getStatus() {
        return status;
    }

    public void setStatus(SystemStatus status) {
        this.status = status;
    }

    public Debtor getDebtor() {
        return debtor;
    }

    public void setDebtor(Debtor debtor) {
        this.debtor = debtor;
    }

    public DebtorCostCentre getCostCentre() {
        return costCentre;
    }

    public void setCostCentre(DebtorCostCentre costCentre) {
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

    public AdminTransporter getTransporter() {
        return transporter;
    }

    public void setTransporter(AdminTransporter transporter) {
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

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
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

    public String getDelInstructions() {
        return delInstructions;
    }

    public void setDelInstructions(String delInstructions) {
        this.delInstructions = delInstructions;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
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
