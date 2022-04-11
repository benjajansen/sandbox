package com.benja.dao.admin;

import com.benja.model.admin.AdminCountry;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface AdminCountryDao extends CrudRepository<AdminCountry, Long> {
    AdminCountry save(AdminCountry country);

    List<AdminCountry> findAll();

    AdminCountry findByDescription(String description);

    AdminCountry findById(Long id);

    void delete(AdminCountry country);

    boolean exists(Long id);
}
