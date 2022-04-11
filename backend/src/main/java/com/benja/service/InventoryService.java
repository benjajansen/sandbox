package com.benja.service;

import com.benja.model.inventory.InventoryAdjustment;
import com.benja.model.inventory.InventoryTransaction;

import java.util.List;

/**
 * Created by Benja on 14/10/2017.
 */
public interface InventoryService {

    InventoryAdjustment saveInventoryAdjustment(InventoryAdjustment inventoryAdjustment);

    List<InventoryAdjustment> findAllInventoryAdjustments();

    InventoryAdjustment findInventoryAdjustmentById(Long id);

//InventoryTransaction
    InventoryTransaction saveInventoryTransaction(InventoryTransaction inventoryTransaction);

    List<InventoryTransaction> findAllInventoryTransactions();

    InventoryTransaction findInventoryTransactionById(Long id);
}