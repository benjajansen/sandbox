package com.benja.dao.security;

import com.benja.model.security.SecurityAccessType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface AccessTypeDao extends CrudRepository<SecurityAccessType, Long>{

    List<SecurityAccessType> findAll();

    SecurityAccessType findById(Long id);

    SecurityAccessType save(SecurityAccessType accessType);
}
