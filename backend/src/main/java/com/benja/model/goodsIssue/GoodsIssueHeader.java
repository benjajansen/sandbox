package com.benja.model.goodsIssue;

import com.benja.model.admin.AdminBranch;
import com.benja.model.admin.AdminTransporter;
import com.benja.model.goodsReceive.GoodsReceiveHeader;
import com.benja.model.salesOrder.SalesOrderHeader;
import com.benja.model.security.SecurityUser;
import com.benja.model.system.SystemStatus;
import com.benja.model.warehouse.Warehouse;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "itm_gin_header")
public class GoodsIssueHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_gih_id", nullable = false)
    private Long id;

    @Column(name = "itm_gih_date", nullable = false)
    private Date issueDate;

    @ManyToOne
    @JoinColumn(name = "itm_gih_fk_status", nullable = false)
    private SystemStatus status;

    @ManyToOne
    @JoinColumn(name = "itm_gih_fk_sales_order_no", nullable = false)
    private SalesOrderHeader salesOrderHeader;

    @Column(name = "itm_gih_sealno", length = 20)
    private String sealNo;

    @Column(name = "itm_gih_veh_reg_no", length = 20)
    private String vehReg;

    @ManyToOne
    @JoinColumn(name = "itm_gih_fk_transporter")
    private AdminTransporter transporter;

    @ManyToOne
    @JoinColumn(name = "itm_gih_fk_warehouse")
    private Warehouse warehouse;

    @Column(name = "itm_gih_comments")
    private String comments;

    @Column(name = "itm_gih_del_instructions")
    private String deliveryInstructions;

    @ManyToOne
    @JoinColumn(name = "itm_gih_fk_CreateUser")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "itm_gih_CreateDate")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "itm_gih_fk_ModUser")
    private SecurityUser modUser;

    @Column(name = "itm_gih_ModDate")
    private Date modDate;

    @Version
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_gih_version", nullable = false)
    private Long version;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(Date issueDate) {
        this.issueDate = issueDate;
    }

    public SystemStatus getStatus() {
        return status;
    }

    public void setStatus(SystemStatus status) {
        this.status = status;
    }

    public SalesOrderHeader getSalesOrderHeader() {
        return salesOrderHeader;
    }

    public void setSalesOrderHeader(SalesOrderHeader salesOrderHeader) {
        this.salesOrderHeader = salesOrderHeader;
    }

    public String getSealNo() {
        return sealNo;
    }

    public void setSealNo(String sealNo) {
        this.sealNo = sealNo;
    }

    public String getVehReg() {
        return vehReg;
    }

    public void setVehReg(String vehReg) {
        this.vehReg = vehReg;
    }

    public AdminTransporter getTransporter() {
        return transporter;
    }

    public void setTransporter(AdminTransporter transporter) {
        this.transporter = transporter;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getDeliveryInstructions() {
        return deliveryInstructions;
    }

    public void setDeliveryInstructions(String deliveryInstructions) {
        this.deliveryInstructions = deliveryInstructions;
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
