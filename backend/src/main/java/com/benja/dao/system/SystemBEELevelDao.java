package com.benja.dao.system;

import com.benja.model.system.SystemBEELevel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemBEELevelDao extends CrudRepository<SystemBEELevel, Long> {
    SystemBEELevel save(SystemBEELevel beeLevel);

    List<SystemBEELevel> findAll();

    SystemBEELevel findByDescription(String description);

    SystemBEELevel findById(Long id);

    void delete(SystemBEELevel beeLevel);

    boolean exists(Long id);
}
