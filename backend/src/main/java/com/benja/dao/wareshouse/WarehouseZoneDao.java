package com.benja.dao.wareshouse;

import com.benja.model.warehouse.Warehouse;
import com.benja.model.warehouse.WarehouseZone;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface WarehouseZoneDao extends CrudRepository<WarehouseZone, Long> {
    WarehouseZone save(WarehouseZone warehouseZone);

    List<WarehouseZone> findAll();

    List<WarehouseZone> findByWarehouse_id(Long id);

    WarehouseZone findByName(String name);

    WarehouseZone findById(Long id);

    void delete(WarehouseZone warehouseZone);

    boolean exists(Long id);
}
