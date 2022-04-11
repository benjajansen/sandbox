package com.benja.dao.security;

import com.benja.model.security.SecurityGroupDetail;
import com.benja.model.security.SecurityGroupHeader;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Repository
public interface GroupDetailDao extends CrudRepository<SecurityGroupDetail, Long>{

    List<SecurityGroupDetail> findAll();

    SecurityGroupDetail findById(Long id);

    SecurityGroupDetail save(SecurityGroupDetail securityGroupDetail);
}
