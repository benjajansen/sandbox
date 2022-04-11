package com.benja.dao.inventory;

import com.benja.model.inventory.InventoryTransaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface InventoryTransactionDao extends CrudRepository<InventoryTransaction, Long>{

    InventoryTransaction save(InventoryTransaction inventoryTransaction);

    List<InventoryTransaction> findAll();

    InventoryTransaction findById(Long id);
}
