package com.benja.dao.wareshouse;

import com.benja.model.admin.AdminProvince;
import com.benja.model.warehouse.WarehouseLocation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface WarehouseLocationDao extends CrudRepository<WarehouseLocation, Long> {
    WarehouseLocation save(WarehouseLocation warehouseLocation);

    List<WarehouseLocation> findAll();

    List<WarehouseLocation> findByWarehouseZone_id(Long id);

    WarehouseLocation findByIdentifier(String identifier);

    WarehouseLocation findById(Long id);

    void delete(WarehouseLocation warehouseLocation);

    boolean exists(Long id);
}
