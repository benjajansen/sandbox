package com.benja.dao.wareshouse;

import com.benja.model.admin.AdminCountry;
import com.benja.model.warehouse.WarehouseJobTitle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface WarehouseJobTitleDao extends CrudRepository<WarehouseJobTitle, Long> {
    WarehouseJobTitle save(WarehouseJobTitle jobTitle);

    List<WarehouseJobTitle> findAll();

    WarehouseJobTitle findByTitle(String title);

    WarehouseJobTitle findById(Long id);

    void delete(WarehouseJobTitle jobTitle);

    boolean exists(Long id);
}
