package com.benja.controller;

import com.benja.model.inventory.InventoryAdjustment;
import com.benja.model.inventory.InventoryTransaction;
import com.benja.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@RestController
@RequestMapping("/rest/inventory")
public class InventoryResource {

    @Autowired
    private InventoryService inventoryService;

    @RequestMapping(value = "/adjustment/add", method = RequestMethod.POST)
    public InventoryAdjustment addInventoryAdjustment(@RequestBody InventoryAdjustment inventoryAdjustment) {
        return inventoryService.saveInventoryAdjustment(inventoryAdjustment);
    }

    @RequestMapping(value = "/adjustment/getAll", method = RequestMethod.POST)
    public List<InventoryAdjustment> getItemMasterAll() {
        return inventoryService.findAllInventoryAdjustments();
    }

    @RequestMapping(value = "/adjustment/id", method = RequestMethod.POST)
    public InventoryAdjustment getInventoryAdjustmentById(@RequestBody Long id) {
        return inventoryService.findInventoryAdjustmentById(id);
    }

    @RequestMapping(value = "/adjustment/update", method = RequestMethod.POST)
    public void updateInventoryAdjustment(@RequestBody InventoryAdjustment inventoryAdjustment) {
        inventoryService.saveInventoryAdjustment(inventoryAdjustment);
    }
    
//InventoryTransaction

    @RequestMapping(value = "/transaction/add", method = RequestMethod.POST)
    public InventoryTransaction addInventoryTransaction(@RequestBody InventoryTransaction inventoryTransaction) {
        return inventoryService.saveInventoryTransaction(inventoryTransaction);
    }

    @RequestMapping(value = "/transaction/getAll", method = RequestMethod.POST)
    public List<InventoryTransaction> getInventoryTransactionAll() {
        return inventoryService.findAllInventoryTransactions();
    }

    @RequestMapping(value = "/transaction/id", method = RequestMethod.POST)
    public InventoryTransaction getInventoryTransactionById(@RequestBody Long id) {
        return inventoryService.findInventoryTransactionById(id);
    }

    @RequestMapping(value = "/transaction/update", method = RequestMethod.POST)
    public void updateInventoryTransaction(@RequestBody InventoryTransaction inventoryTransaction) {
        inventoryService.saveInventoryTransaction(inventoryTransaction);
    }
}
