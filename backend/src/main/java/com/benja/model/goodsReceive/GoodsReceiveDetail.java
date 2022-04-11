package com.benja.model.goodsReceive;

import com.benja.model.item.ItemLink;
import com.benja.model.security.SecurityUser;
import com.benja.model.warehouse.WarehouseLocation;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Benja on 5/20/2017.
 */
@Entity
@Table(name = "itm_grn_detail")
public class GoodsReceiveDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_grd_id", nullable = false)
    private Long id;

    @Column(name = "itm_grd_line_no", nullable = false)
    private int lineNo;

    @ManyToOne
    @JoinColumn(name = "itm_grd_fk_grn_header", nullable = false)
    private GoodsReceiveHeader goodsReceiveHeader;

    @ManyToOne
    @JoinColumn(name = "itm_grd_fk_item_code", nullable = false)
    private ItemLink itemLink;

    @Column(name = "itm_grd_fk_ps_pallet_no", nullable = false)
    private String palletNo;

    @ManyToOne
    @JoinColumn(name = "itm_grd_fk_location", nullable = false)
    private WarehouseLocation warehouseLocation;

    @Column(name = "itm_grd_qty", nullable = false, precision = 11, scale = 0)
    private BigDecimal quantity;

    @Column(name = "itm_grd_gross_wgt", nullable = false, precision = 11, scale = 0)
    private BigDecimal grossWeight;

    @Column(name = "itm_grd_box_wgt", nullable = false, precision = 11, scale = 0)
    private BigDecimal boxWeight;

    @Column(name = "itm_grd_nett_wgt", nullable = false, precision = 11, scale = 0)
    private BigDecimal nettWeight;

    @Column(name = "itm_grd_qty_pallets", nullable = false, precision = 11, scale = 0)
    private BigDecimal qtyPallets;

    @Column(name = "itm_grd_cube_size", nullable = false, precision = 11, scale = 0)
    private BigDecimal cubeSize;

    @Column(name = "itm_grd_print_label", nullable = false)
    private boolean printLabel;

    @Column(name = "itm_grd_rp_print_label", nullable = false)
    private boolean reprintLabel;

    @ManyToOne
    @JoinColumn(name = "itm_grd_fk_create_user")
    private SecurityUser createUser;

    @CreationTimestamp
    @Column(name = "itm_grd_create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "itm_grd_fk_modify_user")
    private SecurityUser modUser;

    @CreationTimestamp
    @Column(name = "itm_grd_modified_date")
    private Date modDate;

    @Version
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "itm_grd_version", nullable = false)
    private Long version;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getLineNo() {
        return lineNo;
    }

    public void setLineNo(int lineNo) {
        this.lineNo = lineNo;
    }

    public GoodsReceiveHeader getGoodsReceiveHeader() {
        return goodsReceiveHeader;
    }

    public void setGoodsReceiveHeader(GoodsReceiveHeader goodsReceiveHeader) {
        this.goodsReceiveHeader = goodsReceiveHeader;
    }

    public ItemLink getItemLink() {
        return itemLink;
    }

    public void setItemLink(ItemLink itemLink) {
        this.itemLink = itemLink;
    }

    public String getPalletNo() {
        return palletNo;
    }

    public void setPalletNo(String palletNo) {
        this.palletNo = palletNo;
    }

    public WarehouseLocation getWarehouseLocation() {
        return warehouseLocation;
    }

    public void setWarehouseLocation(WarehouseLocation warehouseLocation) {
        this.warehouseLocation = warehouseLocation;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getGrossWeight() {
        return grossWeight;
    }

    public void setGrossWeight(BigDecimal grossWeight) {
        this.grossWeight = grossWeight;
    }

    public BigDecimal getBoxWeight() {
        return boxWeight;
    }

    public void setBoxWeight(BigDecimal boxWeight) {
        this.boxWeight = boxWeight;
    }

    public BigDecimal getNettWeight() {
        return nettWeight;
    }

    public void setNettWeight(BigDecimal nettWeight) {
        this.nettWeight = nettWeight;
    }

    public BigDecimal getQtyPallets() {
        return qtyPallets;
    }

    public void setQtyPallets(BigDecimal qtyPallets) {
        this.qtyPallets = qtyPallets;
    }

    public BigDecimal getCubeSize() {
        return cubeSize;
    }

    public void setCubeSize(BigDecimal cubeSize) {
        this.cubeSize = cubeSize;
    }

    public boolean isPrintLabel() {
        return printLabel;
    }

    public void setPrintLabel(boolean printLabel) {
        this.printLabel = printLabel;
    }

    public boolean isReprintLabel() {
        return reprintLabel;
    }

    public void setReprintLabel(boolean reprintLabel) {
        this.reprintLabel = reprintLabel;
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
