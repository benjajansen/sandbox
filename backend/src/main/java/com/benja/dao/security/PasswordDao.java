package com.benja.dao.security;

import com.benja.model.security.SecurityPassword;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface PasswordDao extends CrudRepository<SecurityPassword, Long>{

    List<SecurityPassword> findAll();

    SecurityPassword findById(Long id);

    SecurityPassword findByUser_id(Long id);

    SecurityPassword save(SecurityPassword securityPassword);
}
