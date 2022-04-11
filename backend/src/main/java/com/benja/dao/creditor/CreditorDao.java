package com.benja.dao.creditor;

import com.benja.model.creditor.Creditor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@Repository
public interface CreditorDao extends CrudRepository<Creditor, Long> {

    Creditor save(Creditor creditor);

    List<Creditor> findAll();

    Creditor findByAccNo(String accNo);

    Creditor findById(Long id);
}
