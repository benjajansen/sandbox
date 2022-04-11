package com.benja.model.item;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "itm_item_master")
public class ItemMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_id", nullable = false)
    private Long id;

    @Column(name = "itm_item_code", nullable = false, length = 30)
    private String code;

    @Column(name = "itm_description", nullable = false, length = 80)
    private String description;

    @ManyToOne
    @JoinColumn(name = "itm_fk_measure")
    private ItemUnitOfMeasure measure;

    @Column(name = "itm_cube_size", precision = 11, scale = 5)
    private BigDecimal cubeSize;

    @ManyToOne
    @JoinColumn(name = "itm_fk_group")
    private ItemGroup group;

    @ManyToOne
    @JoinColumn(name = "itm_fk_category")
    private ItemCategory category;

    @Column(name = "itm_comments")
    private String comments;

    @Column(name = "itm_qty_on_order", precision = 11, scale = 2)
    private BigDecimal onOrderQuantity;

    @Column(name = "itm_qty_received", precision = 11, scale = 2)
    private BigDecimal receivedQuantity;

    @Column(name = "itm_rec_nett_weight", precision = 11, scale = 2)
    private BigDecimal receivedNettWeight;

    @Column(name = "itm_pallets_received", precision = 11, scale = 2)
    private BigDecimal receivedPallets;

    @Column(name = "itm_qty_issued", precision = 11, scale = 2)
    private BigDecimal issuedQuantity;

    @Column(name = "itm_iss_nett_weight", precision = 11, scale = 2)
    private BigDecimal issuedNettWeight;

    @Column(name = "itm_pallets_issued", precision = 11, scale = 2)
    private BigDecimal issuedPallets;

    @Column(name = "itm_qty_on_hand", precision = 11, scale = 2)
    private BigDecimal onHandQuantity;

    @Column(name = "itm_oh_nett_weight", precision = 11, scale = 2)
    private BigDecimal onHandNettWeight;

    @Column(name = "itm_pallets_on_hand", precision = 11, scale = 2)
    private BigDecimal onHandPallets;

    @Column(name = "itm_suspend")
    private boolean suspend;

    @Column(name = "itm_suspend_date")
    private Date suspendDate;

    @ManyToOne
    @JoinColumn(name = "itm_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "itm_create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "itm_fk_mod_user")
    private SecurityUser modUser;

    @Column(name = "itm_mod_date")
    private Date modDate;

    @Version
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_version", nullable = false)
    private Long version;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ItemUnitOfMeasure getMeasure() {
        return measure;
    }

    public void setMeasure(ItemUnitOfMeasure measure) {
        this.measure = measure;
    }

    public ItemGroup getGroup() {
        return group;
    }

    public void setGroup(ItemGroup group) {
        this.group = group;
    }

    public ItemCategory getCategory() {
        return category;
    }

    public void setCategory(ItemCategory category) {
        this.category = category;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public BigDecimal getOnOrderQuantity() {
        return onOrderQuantity;
    }

    public void setOnOrderQuantity(BigDecimal onOrderQuantity) {
        this.onOrderQuantity = onOrderQuantity;
    }

    public BigDecimal getReceivedQuantity() {
        return receivedQuantity;
    }

    public void setReceivedQuantity(BigDecimal receivedQuantity) {
        this.receivedQuantity = receivedQuantity;
    }

    public BigDecimal getReceivedNettWeight() {
        return receivedNettWeight;
    }

    public void setReceivedNettWeight(BigDecimal receivedNettWeight) {
        this.receivedNettWeight = receivedNettWeight;
    }

    public BigDecimal getReceivedPallets() {
        return receivedPallets;
    }

    public void setReceivedPallets(BigDecimal receivedPallets) {
        this.receivedPallets = receivedPallets;
    }

    public BigDecimal getIssuedQuantity() {
        return issuedQuantity;
    }

    public void setIssuedQuantity(BigDecimal issuedQuantity) {
        this.issuedQuantity = issuedQuantity;
    }

    public BigDecimal getIssuedNettWeight() {
        return issuedNettWeight;
    }

    public void setIssuedNettWeight(BigDecimal issuedNettWeight) {
        this.issuedNettWeight = issuedNettWeight;
    }

    public BigDecimal getIssuedPallets() {
        return issuedPallets;
    }

    public void setIssuedPallets(BigDecimal issuedPallets) {
        this.issuedPallets = issuedPallets;
    }

    public BigDecimal getOnHandQuantity() {
        return onHandQuantity;
    }

    public void setOnHandQuantity(BigDecimal onHandQuantity) {
        this.onHandQuantity = onHandQuantity;
    }

    public BigDecimal getOnHandNettWeight() {
        return onHandNettWeight;
    }

    public void setOnHandNettWeight(BigDecimal onHandNettWeight) {
        this.onHandNettWeight = onHandNettWeight;
    }

    public BigDecimal getOnHandPallets() {
        return onHandPallets;
    }

    public void setOnHandPallets(BigDecimal onHandPallets) {
        this.onHandPallets = onHandPallets;
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
