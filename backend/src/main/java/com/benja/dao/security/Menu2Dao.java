package com.benja.dao.security;

import com.benja.model.security.SecurityMenu1;
import com.benja.model.security.SecurityMenu2;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface Menu2Dao extends CrudRepository<SecurityMenu2, Long>{

    List<SecurityMenu2> findAll();

    SecurityMenu2 findById(Long id);

    SecurityMenu2 save(SecurityMenu2 securityMenu2);
}
