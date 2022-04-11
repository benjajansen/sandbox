package com.benja.dao.admin;

import com.benja.model.admin.AdminCompany;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface AdminCompanyDao extends CrudRepository<AdminCompany, Long>{

    AdminCompany save(AdminCompany company);
}
