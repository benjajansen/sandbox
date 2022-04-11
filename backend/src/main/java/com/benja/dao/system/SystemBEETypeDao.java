package com.benja.dao.system;

import com.benja.model.system.SystemBEEType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemBEETypeDao extends CrudRepository<SystemBEEType, Long> {
    SystemBEEType save(SystemBEEType beeType);

    List<SystemBEEType> findAll();

    SystemBEEType findByDescription(String description);

    SystemBEEType findById(Long id);

    void delete(SystemBEEType beeType);

    boolean exists(Long id);
}
