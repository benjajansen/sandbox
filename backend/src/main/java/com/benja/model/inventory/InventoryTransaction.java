package com.benja.model.inventory;

import com.benja.model.admin.AdminTransporter;
import com.benja.model.creditor.Creditor;
import com.benja.model.debtor.Debtor;
import com.benja.model.security.SecurityUser;
import com.benja.model.system.SystemTransactionType;
import com.benja.model.warehouse.Warehouse;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "inv_transactions")
public class InventoryTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "inv_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "inv_fk_type", nullable = false)
    private SystemTransactionType transactionType;

    @Column(name = "inv_fk_reference", nullable = false)
    private Long reference;

    @Column(name = "inv_date")
    private Date transactionDate;

    @Column(name = "inv_status")
    private String status;

    @ManyToOne
    @JoinColumn(name = "inv_fk_warehouse")
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn(name = "inv_fk_supplier")
    private Creditor supplier;

    @ManyToOne
    @JoinColumn(name = "inv_fk_customer")
    private Debtor customer;

    @Column(name = "inv_order_no", length = 50)
    private String orderNo;

    @Column(name = "inv_release_no", length = 50)
    private String releaseNo;

    @ManyToOne
    @JoinColumn(name = "inv_fk_transporter")
    private AdminTransporter transporter;

    @Column(name = "inv_delivery_note", length = 50)
    private String deliveryNote;

    @Column(name = "inv_invoice_no", length = 50)
    private String invoiceNo;

    @Column(name = "inv_seal_no", length = 50)
    private String sealNo;

    @Column(name = "inv_suspend")
    private boolean suspend;

    @Column(name = "inv_suspend_date")
    private Date suspendDate;

    @ManyToOne
    @JoinColumn(name = "inv_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "inv_create_date")
    private Date createDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SystemTransactionType getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(SystemTransactionType transactionType) {
        this.transactionType = transactionType;
    }

    public Long getReference() {
        return reference;
    }

    public void setReference(Long reference) {
        this.reference = reference;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public Creditor getSupplier() {
        return supplier;
    }

    public void setSupplier(Creditor supplier) {
        this.supplier = supplier;
    }

    public Debtor getCustomer() {
        return customer;
    }

    public void setCustomer(Debtor customer) {
        this.customer = customer;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
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
