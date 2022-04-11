package com.benja.dao.security;

import com.benja.model.security.SecurityUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface UserDao extends CrudRepository<SecurityUser, Long>{

    List<SecurityUser> findAll();

    boolean existsByEmail(String email);

    SecurityUser findByLogonName(String logonName);

    SecurityUser findById(Long id);

    SecurityUser save(SecurityUser user);
}
