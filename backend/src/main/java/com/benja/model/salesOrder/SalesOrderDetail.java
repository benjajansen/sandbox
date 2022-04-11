package com.benja.model.salesOrder;

import com.benja.model.item.ItemLink;
import com.benja.model.item.ItemMaster;
import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "drm_sales_order_detail")
public class SalesOrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "drm_sod_id", nullable = false)
    private Long id;

    @Column(name = "drm_sod_line_no", nullable = false)
    private int lineNumber;

    @ManyToOne
    @JoinColumn(name = "drm_sod_fk_header", nullable = false)
    private SalesOrderHeader salesOrderHeader;

    @ManyToOne
    @JoinColumn(name = "drm_sod_fk_item_code", nullable = false)
    private ItemLink itemLink;

    @Column(name = "drm_sod_fk_pick_method", nullable = false)
    private String pickMethod;

    @Column(name = "drm_sod_order_qty", nullable = false, precision = 11, scale = 0)
    private BigDecimal orderQty;

    @Column(name = "drm_sod_back_order", nullable = false)
    private boolean backOrder;

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

    public SalesOrderHeader getSalesOrderHeader() {
        return salesOrderHeader;
    }

    public void setSalesOrderHeader(SalesOrderHeader salesOrderHeader) {
        this.salesOrderHeader = salesOrderHeader;
    }

    public ItemLink getItemLink() {
        return itemLink;
    }

    public void setItemLink(ItemLink itemLink) {
        this.itemLink = itemLink;
    }

    public String getPickMethod() {
        return pickMethod;
    }

    public void setPickMethod(String pickMethod) {
        this.pickMethod = pickMethod;
    }

    public BigDecimal getOrderQty() {
        return orderQty;
    }

    public void setOrderQty(BigDecimal orderQty) {
        this.orderQty = orderQty;
    }

    public boolean isBackOrder() {
        return backOrder;
    }

    public void setBackOrder(boolean backOrder) {
        this.backOrder = backOrder;
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
