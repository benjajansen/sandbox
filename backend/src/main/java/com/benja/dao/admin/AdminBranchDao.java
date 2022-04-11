package com.benja.dao.admin;

import com.benja.model.admin.AdminBranch;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface AdminBranchDao extends CrudRepository<AdminBranch, Long> {
    AdminBranch save(AdminBranch branch);

    List<AdminBranch> findAll();

    AdminBranch findByDescription(String description);

    AdminBranch findById(Long id);

    void delete(AdminBranch branch);

    boolean exists(Long id);
}
