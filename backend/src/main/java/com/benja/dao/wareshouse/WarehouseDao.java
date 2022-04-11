package com.benja.dao.wareshouse;

import com.benja.model.admin.AdminProvince;
import com.benja.model.warehouse.Warehouse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface WarehouseDao extends CrudRepository<Warehouse, Long> {
    Warehouse save(Warehouse warehouse);

    List<Warehouse> findAll();

    List<Warehouse> findByBranch_id(Long id);

    Warehouse findByName(String name);

    Warehouse findById(Long id);

    void delete(Warehouse warehouse);

    boolean exists(Long id);
}
