package com.benja.dao.debtor;

import com.benja.model.debtor.Debtor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface DebtorDao extends CrudRepository<Debtor, Long>{

    Debtor save(Debtor debtor);

    List<Debtor> findAll();

    Debtor findByAccNo(String accNo);

    Debtor findById(Long id);
}
