package com.benja.dao.security;

import com.benja.model.security.SecurityGroupDetail;
import com.benja.model.security.SecurityMenu1;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface Menu1Dao extends CrudRepository<SecurityMenu1, Long>{

    List<SecurityMenu1> findAll();

    SecurityMenu1 findById(Long id);

    SecurityMenu1 save(SecurityMenu1 securityMenu1);
}
