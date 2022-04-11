package com.benja.service.impl;

import com.benja.dao.inventory.InventoryAdjustmentDao;
import com.benja.dao.inventory.InventoryTransactionDao;
import com.benja.model.inventory.InventoryAdjustment;
import com.benja.model.inventory.InventoryTransaction;
import com.benja.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@Service
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    private InventoryAdjustmentDao inventoryAdjustmentDao;

    @Autowired
    private InventoryTransactionDao inventoryTransactionDao;

    @Override
    public InventoryAdjustment saveInventoryAdjustment(InventoryAdjustment inventoryAdjustment) {
        InventoryAdjustment inv = inventoryAdjustment;
        return inventoryAdjustmentDao.save(inv);
    }

    @Override
    public List<InventoryAdjustment> findAllInventoryAdjustments() {
        return inventoryAdjustmentDao.findAll();
    }

    @Override
    public InventoryAdjustment findInventoryAdjustmentById(Long id) {
        InventoryAdjustment inv = new InventoryAdjustment();

        inv = inventoryAdjustmentDao.findById(id);

        return inv;
    }

//InventoryTransaction
    @Override
    public InventoryTransaction saveInventoryTransaction(InventoryTransaction inventoryTransaction) {
        return inventoryTransactionDao.save(inventoryTransaction);
    }

    @Override
    public List<InventoryTransaction> findAllInventoryTransactions() {
        return inventoryTransactionDao.findAll();
    }

    @Override
    public InventoryTransaction findInventoryTransactionById(Long id) {
        return inventoryTransactionDao.findById(id);
    }
}
