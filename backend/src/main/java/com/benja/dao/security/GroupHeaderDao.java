package com.benja.dao.security;

import com.benja.model.security.SecurityGroupHeader;
import com.benja.model.security.SecurityUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface GroupHeaderDao extends CrudRepository<SecurityGroupHeader, Long>{

    List<SecurityGroupHeader> findAll();

    SecurityGroupHeader findById(Long id);

    SecurityGroupHeader save(SecurityGroupHeader securityGroupHeader);
}
