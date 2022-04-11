package com.benja.dao.wareshouse;

import com.benja.model.warehouse.WarehouseJobTitle;
import com.benja.model.warehouse.WarehouseStaff;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface WarehouseStaffDao extends CrudRepository<WarehouseStaff, Long> {
    WarehouseStaff save(WarehouseStaff warehouseStaff);

    List<WarehouseStaff> findAll();

    WarehouseStaff findById(Long id);

    void delete(WarehouseStaff warehouseStaff);

    boolean exists(Long id);
}
