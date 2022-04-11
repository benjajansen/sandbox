package com.benja.model.goodsReceive;

import com.benja.model.admin.AdminBranch;
import com.benja.model.admin.AdminTransporter;
import com.benja.model.system.SystemStatus;
import com.benja.model.warehouse.Warehouse;
import com.benja.model.creditor.Creditor;
import com.benja.model.debtor.Debtor;
import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "itm_grn_GoodsReceiveHeader")
public class GoodsReceiveHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_grn_id", nullable = false)
    private Long id;

    @Column(name = "itm_grn_date", nullable = false)
    private Date receiveDate;

    @ManyToOne
    @JoinColumn(name = "itm_grn_fk_status", nullable = false)
    private SystemStatus status;

    @ManyToOne
    @JoinColumn(name = "itm_grn_fk_customer")
    private Debtor debtor;

    @ManyToOne
    @JoinColumn(name = "itm_grn_fk_supplier")
    private Creditor creditor;

    @Column(name = "itm_grn_delivery_note", length = 20, nullable = false)
    private String deliveryNote;

    @Column(name = "itm_grn_invoice_no", length = 20)
    private String invoiceNo;

    @Column(name = "itm_grn_seal_no", length = 20)
    private String sealNo;

    @Column(name = "itm_grn_veh_reg_no", length = 20)
    private String vehReg;

    @Column(name = "itm_grn_po_no", length = 20)
    private String purchaseOrderNo;

    @Column(name = "itm_grn_batch_no", length = 20)
    private String batchNo;

    @ManyToOne
    @JoinColumn(name = "itm_grn_fk_transporter")
    private AdminTransporter transporter;

    @Column(name = "itm_grn_production_date")
    private Date productionDate;

    @ManyToOne
    @JoinColumn(name = "itm_grn_fk_warehouse")
    private Warehouse warehouse;

    @Column(name = "itm_grn_comments")
    private String comments;

    @CreationTimestamp
    @Column(name = "itm_grn_CreateDate")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "itm_grn_fk_CreateUser")
    private SecurityUser createUser;

    @Column(name = "itm_grn_ModDate")
    private Date modDate;

    @ManyToOne
    @JoinColumn(name = "itm_grn_fk_ModUser")
    private SecurityUser modUser;

    @Version
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_grn_version", nullable = false)
    private Long version;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getReceiveDate() {
        return receiveDate;
    }

    public void setReceiveDate(Date receiveDate) {
        this.receiveDate = receiveDate;
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

    public Creditor getCreditor() {
        return creditor;
    }

    public void setCreditor(Creditor creditor) {
        this.creditor = creditor;
    }

    public String getDeliveryNote() {
        return deliveryNote;
    }

    public void setDeliveryNote(String deliveryNote) {
        this.deliveryNote = deliveryNote;
    }

    public String getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(String invoiceNo) {
        this.invoiceNo = invoiceNo;
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

    public String getPurchaseOrderNo() {
        return purchaseOrderNo;
    }

    public void setPurchaseOrderNo(String purchaseOrderNo) {
        this.purchaseOrderNo = purchaseOrderNo;
    }

    public String getBatchNo() {
        return batchNo;
    }

    public void setBatchNo(String batchNo) {
        this.batchNo = batchNo;
    }

    public AdminTransporter getTransporter() {
        return transporter;
    }

    public void setTransporter(AdminTransporter transporter) {
        this.transporter = transporter;
    }

    public Date getProductionDate() {
        return productionDate;
    }

    public void setProductionDate(Date productionDate) {
        this.productionDate = productionDate;
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

    public Date getModDate() {
        return modDate;
    }

    public void setModDate(Date modDate) {
        this.modDate = modDate;
    }

    public SecurityUser getModUser() {
        return modUser;
    }

    public void setModUser(SecurityUser modUser) {
        this.modUser = modUser;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }
}
