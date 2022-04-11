package com.benja.dao.wareshouse;

import com.benja.model.warehouse.Warehouse;
import com.benja.model.warehouse.WarehouseParameter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface WarehouseParameterDao extends CrudRepository<WarehouseParameter, Long> {
    WarehouseParameter save(WarehouseParameter paramater);

    List<WarehouseParameter> findAll();

    WarehouseParameter findById(Long id);

    void delete(WarehouseParameter paramater);

    boolean exists(Long id);
}
