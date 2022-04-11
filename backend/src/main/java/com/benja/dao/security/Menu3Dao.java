package com.benja.dao.security;

import com.benja.model.security.SecurityMenu2;
import com.benja.model.security.SecurityMenu3;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface Menu3Dao extends CrudRepository<SecurityMenu3, Long>{

    List<SecurityMenu3> findAll();

    SecurityMenu3 findById(Long id);

    SecurityMenu3 save(SecurityMenu3 securityMenu3);
}
