package com.benja.dao.admin;

import com.benja.model.admin.AdminProvince;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface AdminProvinceDao extends CrudRepository<AdminProvince, Long> {
    AdminProvince save(AdminProvince province);

    List<AdminProvince> findAll();

    List<AdminProvince> findByCountry_Id(Long id);

    AdminProvince findByDescription(String description);

    AdminProvince findById(Long id);

    void delete(AdminProvince province);

    boolean exists(Long id);
}
