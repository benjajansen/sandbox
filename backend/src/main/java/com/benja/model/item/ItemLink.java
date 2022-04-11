package com.benja.model.item;

import com.benja.model.debtor.Debtor;
import com.benja.model.security.SecurityUser;
import com.benja.model.system.SystemPickMethod;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "itm_item_link")
public class ItemLink {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_lk_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "itm_lk_fk_item_master", nullable = false)
    private ItemMaster item;

    @ManyToOne
    @JoinColumn(name = "itm_lk_fk_debtor", nullable = false)
    private Debtor debtor;

    @Column(name = "itm_lk_alternative_code")
    private String alternativeCode;

    @ManyToOne
    @JoinColumn(name = "itm_lk_fk_pick_method", nullable = false)
    private SystemPickMethod pickMethod;

    @Column(name = "itm_lk_comments")
    private String comments;

    @Column(name = "itm_lk_min_qty", precision = 11)
    private BigDecimal minQty;

    @Column(name = "itm_lk_max_qty", precision = 11)
    private BigDecimal maxQty;

    @Column(name = "itm_lk_reorder", precision = 11)
    private BigDecimal reorderQty;

    @Column(name = "itm_lk_expiry_date")
    private boolean expiryDate;

    @Column(name = "itm_lk_best_before_date")
    private boolean bestBefore;

    @Column(name = "itm_lk_qty_on_order", precision = 11, scale = 2)
    private BigDecimal onOrderQuantity;

    @Column(name = "itm_lk_qty_receive", precision = 11, scale = 2)
    private BigDecimal receivedQuantity;

    @Column(name = "itm_lk_nett_weight_receive", precision = 11, scale = 2)
    private BigDecimal receivedNettWeight;

    @Column(name = "itm_lk_pallets_receive", precision = 11)
    private BigDecimal receivedPallets;

    @Column(name = "itm_lk_qty_issue", precision = 11, scale = 2)
    private BigDecimal issuedQuantity;

    @Column(name = "itm_lk_nett_weight_issue", precision = 11, scale = 2)
    private BigDecimal issuedNettWeight;

    @Column(name = "itm_lk_pallets_issue", precision = 11)
    private BigDecimal issuedPallets;

    @Column(name = "itm_lk_qty_total", precision = 11, scale = 2)
    private BigDecimal onHandQuantity;

    @Column(name = "itm_lk_nett_weight_total", precision = 11, scale = 2)
    private BigDecimal onHandNettWeight;

    @Column(name = "itm_lk_pallets_total", precision = 11)
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

    public ItemMaster getItem() {
        return item;
    }

    public void setItem(ItemMaster item) {
        this.item = item;
    }

    public Debtor getDebtor() {
        return debtor;
    }

    public void setDebtor(Debtor debtor) {
        this.debtor = debtor;
    }

    public String getAlternativeCode() {
        return alternativeCode;
    }

    public void setAlternativeCode(String alternativeCode) {
        this.alternativeCode = alternativeCode;
    }

    public SystemPickMethod getPickMethod() {
        return pickMethod;
    }

    public void setPickMethod(SystemPickMethod pickMethod) {
        this.pickMethod = pickMethod;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public BigDecimal getMinQty() {
        return minQty;
    }

    public void setMinQty(BigDecimal minQty) {
        this.minQty = minQty;
    }

    public BigDecimal getMaxQty() {
        return maxQty;
    }

    public void setMaxQty(BigDecimal maxQty) {
        this.maxQty = maxQty;
    }

    public BigDecimal getReorderQty() {
        return reorderQty;
    }

    public void setReorderQty(BigDecimal reorderQty) {
        this.reorderQty = reorderQty;
    }

    public boolean isExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(boolean expiryDate) {
        this.expiryDate = expiryDate;
    }

    public boolean isBestBefore() {
        return bestBefore;
    }

    public void setBestBefore(boolean bestBefore) {
        this.bestBefore = bestBefore;
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
