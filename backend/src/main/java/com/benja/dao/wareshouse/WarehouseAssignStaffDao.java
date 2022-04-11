package com.benja.dao.wareshouse;

import com.benja.model.admin.AdminCityTown;
import com.benja.model.warehouse.WarehouseAssignStaff;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface WarehouseAssignStaffDao extends CrudRepository<WarehouseAssignStaff, Long> {
    WarehouseAssignStaff save(WarehouseAssignStaff assignStaff);

    List<WarehouseAssignStaff> findAll();

    List<WarehouseAssignStaff> findByWarehouseStaff_Id(Long id);

    List<WarehouseAssignStaff> findByWarehouseZone_Id(Long id);

    List<WarehouseAssignStaff> findByWarehouseStaff_IdAndWarehouseZone_Id(Long staffId, Long zoneId);

    WarehouseAssignStaff findById(Long id);

    void delete(WarehouseAssignStaff assignStaff);

    boolean exists(Long id);
}
