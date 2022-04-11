package com.benja.model.goodsReceive;

/**
 * Created by Benja on 5/20/2017.
 */
public class GoodsReceiveDetailPackage {

    private Long id;
    private Long goodsIssue;
    private String item;
    private String pickingOrder;
    private int quantity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getGoodsIssue() {
        return goodsIssue;
    }

    public void setGoodsIssue(Long goodsIssue) {
        this.goodsIssue = goodsIssue;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getPickingOrder() {
        return pickingOrder;
    }

    public void setPickingOrder(String pickingOrder) {
        this.pickingOrder = pickingOrder;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
