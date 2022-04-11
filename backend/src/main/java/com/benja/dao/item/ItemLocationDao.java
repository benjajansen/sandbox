package com.benja.dao.item;

import com.benja.model.item.ItemLocation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface ItemLocationDao extends CrudRepository<ItemLocation, Long>{

    ItemLocation save(ItemLocation itemLocation);

    List<ItemLocation> findAll();

    List<ItemLocation> findByWarehouse_idAndZone_id(Long warehouseId, Long ZoneId);

    ItemLocation findById(Long id);
}
