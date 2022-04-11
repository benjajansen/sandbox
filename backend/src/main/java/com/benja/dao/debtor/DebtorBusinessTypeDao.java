package com.benja.dao.debtor;

import com.benja.model.debtor.DebtorBusinessType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface DebtorBusinessTypeDao extends CrudRepository<DebtorBusinessType, Long>{
    DebtorBusinessType save(DebtorBusinessType businessType);

    List<DebtorBusinessType> findAll();

    DebtorBusinessType findByDescription(String description);

    DebtorBusinessType findById(Long id);

    void delete(DebtorBusinessType businessType);

    boolean exists(Long id);
}
