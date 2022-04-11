package com.benja.model.inventory;

import com.benja.model.security.SecurityUser;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Ben on 01 Jul 2017.
 */
@Entity
@Table(name = "inv_adjustment")
public class InventoryAdjustment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "inv_aj_id", nullable = false)
    private Long id;

    //@ManyToOne
    //@JoinColumn(name = "inv_aj_fk_pallet_no", nullable = false)
    @Column(name = "inv_aj_fk_pallet_no", nullable = false)
    private Long palletNo;

    @Column(name = "inv_aj_qty", precision = 11, scale = 2)
    private BigDecimal quantity;

    @Column(name = "inv_aj_nett_weight", precision = 11, scale = 2)
    private BigDecimal nettWeight;

    @Column(name = "inv_aj_pallets", precision = 11, scale = 2)
    private BigDecimal pallets;

    @Column(name = "inv_aj_reason", length = 255)
    private String reason;

    @ManyToOne
    @JoinColumn(name = "inv_aj_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "inv_aj_create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "inv_aj_fk_modify_user")
    private SecurityUser modUser;

    @Column(name = "inv_aj_modify_date")
    private Date modDate;

    @Version
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "inv_aj_version", nullable = false)
    private Long version;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPalletNo() {
        return palletNo;
    }

    public void setPalletNo(Long palletNo) {
        this.palletNo = palletNo;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getNettWeight() {
        return nettWeight;
    }

    public void setNettWeight(BigDecimal nettWeight) {
        this.nettWeight = nettWeight;
    }

    public BigDecimal getPallets() {
        return pallets;
    }

    public void setPallets(BigDecimal pallets) {
        this.pallets = pallets;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
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
