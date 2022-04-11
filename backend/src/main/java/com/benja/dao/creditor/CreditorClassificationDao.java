package com.benja.dao.creditor;

import com.benja.model.creditor.CreditorClassification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface CreditorClassificationDao extends CrudRepository<CreditorClassification, Long>{
    CreditorClassification save(CreditorClassification classification);

    List<CreditorClassification> findAll();

    CreditorClassification findByDescription(String description);

    CreditorClassification findById(Long id);

    void delete(CreditorClassification classification);

    boolean exists(Long id);
}
