package com.benja.dao.inventory;

import com.benja.model.inventory.InventoryAdjustment;
import com.benja.model.item.ItemMaster;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface InventoryAdjustmentDao extends CrudRepository<InventoryAdjustment, Long>{

    InventoryAdjustment save(InventoryAdjustment inventoryAdjustment);

    List<InventoryAdjustment> findAll();

    InventoryAdjustment findById(Long id);
}
