package com.benja.dao.system;

import com.benja.model.system.SystemPickMethod;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemPickMethodDao extends CrudRepository<SystemPickMethod, Long> {
    SystemPickMethod save(SystemPickMethod pickMethod);

    List<SystemPickMethod> findAll();

    SystemPickMethod findByName(String name);

    SystemPickMethod findById(Long id);

    void delete(SystemPickMethod pickMethod);

    boolean exists(Long id);
}
