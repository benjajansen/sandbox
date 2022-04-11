package com.benja.model.salesOrder;

/**
 * Created by Benja on 5/20/2017.
 */
public class SalesOrderDetailPackage {

    private Long id;
    private Long salesOrder;
    private String type;
    private String item;
    private String pickingOrder;
    private int quantity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSalesOrder() {
        return salesOrder;
    }

    public void setSalesOrder(Long salesOrderId) {
        this.salesOrder = salesOrderId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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
