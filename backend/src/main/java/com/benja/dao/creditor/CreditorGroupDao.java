package com.benja.dao.creditor;

import com.benja.model.creditor.CreditorGroup;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface CreditorGroupDao extends CrudRepository<CreditorGroup, Long>{
    CreditorGroup save(CreditorGroup group);

    List<CreditorGroup> findAll();

    CreditorGroup findByDescription(String description);

    CreditorGroup findById(Long id);

    void delete(CreditorGroup group);

    boolean exists(Long id);
}
