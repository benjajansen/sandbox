package com.benja.model.goodsIssue;

import com.benja.model.inventory.InventoryTransaction;
import com.benja.model.salesOrder.SalesOrderDetail;
import com.benja.model.security.SecurityUser;
import com.benja.model.warehouse.WarehouseLocation;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "itm_gin_detail")
public class GoodsIssueDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_gid_id", nullable = false)
    private Long id;

    @Column(name = "itm_gid_line_no", nullable = false)
    private int lineNumber;

    @ManyToOne
    @JoinColumn(name = "itm_gid_fk_gin_header", nullable = false)
    private GoodsIssueHeader goodsIssueHeader;

    @ManyToOne
    @JoinColumn(name = "itm_gid_fk_sales_order_detail", nullable = false)
    private SalesOrderDetail salesOrderDetail; //spec 2.1 said I should

    @ManyToOne
    @JoinColumn(name = "itm_gid_fk_inv_transaction", nullable = false)
    private InventoryTransaction inventoryTransaction;

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

    public int getLineNumber() {
        return lineNumber;
    }

    public void setLineNumber(int lineNumber) {
        this.lineNumber = lineNumber;
    }

    public GoodsIssueHeader getGoodsIssueHeader() {
        return goodsIssueHeader;
    }

    public void setGoodsIssueHeader(GoodsIssueHeader goodsIssueHeader) {
        this.goodsIssueHeader = goodsIssueHeader;
    }

    public SalesOrderDetail getSalesOrderDetail() {
        return salesOrderDetail;
    }

    public void setSalesOrderDetail(SalesOrderDetail salesOrderDetail) {
        this.salesOrderDetail = salesOrderDetail;
    }

    public InventoryTransaction getInventoryTransaction() {
        return inventoryTransaction;
    }

    public void setInventoryTransaction(InventoryTransaction inventoryTransaction) {
        this.inventoryTransaction = inventoryTransaction;
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
