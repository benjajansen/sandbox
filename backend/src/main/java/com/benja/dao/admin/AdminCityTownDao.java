package com.benja.dao.admin;

import com.benja.model.admin.AdminCityTown;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface AdminCityTownDao extends CrudRepository<AdminCityTown, Long> {
    AdminCityTown save(AdminCityTown cityTown);

    List<AdminCityTown> findAll();

    List<AdminCityTown> findByProvince_Id(Long id);

    List<AdminCityTown> findByCountry_Id(Long id);

    List<AdminCityTown> findByCountry_IdAndProvince_Id(Long countryId, Long provinceId);

    AdminCityTown findByDescription(String description);

    AdminCityTown findById(Long id);

    void delete(AdminCityTown cityTown);

    boolean exists(Long id);
}
