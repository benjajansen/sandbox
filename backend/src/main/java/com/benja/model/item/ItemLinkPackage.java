package com.benja.model.item;

import com.benja.model.security.SecurityUser;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
public class ItemLinkPackage {

    private Long id;
    private String item;
    private Long debtor;
    private String alternativeCode;
    private String pickMethod;

    private String comments;

    private BigDecimal minQty;
    private BigDecimal maxQty;
    private BigDecimal reorderQty;

    private boolean expiryDate;
    private boolean bestBefore;

    private BigDecimal onOrderQuantity;
    private BigDecimal receivedQuantity;
    private BigDecimal receivedNettWeight;
    private BigDecimal receivedPallets;
    private BigDecimal issuedQuantity;
    private BigDecimal issuedNettWeight;
    private BigDecimal issuedPallets;
    private BigDecimal onHandQuantity;
    private BigDecimal onHandNettWeight;
    private BigDecimal onHandPallets;

    private boolean suspend;
    private Date suspendDate;

    private SecurityUser createUser;
    private Date createDate;

    private SecurityUser modUser;
    private Date modDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Long getDebtor() {
        return debtor;
    }

    public void setDebtor(Long debtor) {
        this.debtor = debtor;
    }

    public String getAlternativeCode() {
        return alternativeCode;
    }

    public void setAlternativeCode(String alternativeCode) {
        this.alternativeCode = alternativeCode;
    }

    public String getPickMethod() {
        return pickMethod;
    }

    public void setPickMethod(String pickMethod) {
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
}
