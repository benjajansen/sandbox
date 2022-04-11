package com.benja.dao.debtor;

import com.benja.model.debtor.DebtorBusinessUnit;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface DebtorBusinessUnitDao extends CrudRepository<DebtorBusinessUnit, Long>{
    DebtorBusinessUnit save(DebtorBusinessUnit businessUnit);

    List<DebtorBusinessUnit> findAll();

    DebtorBusinessUnit findByDescription(String description);

    DebtorBusinessUnit findById(Long id);

    void delete(DebtorBusinessUnit businessUnit);

    boolean exists(Long id);
}
