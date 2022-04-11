package com.benja.dao.debtor;

import com.benja.model.debtor.DebtorCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface DebtorCategoryDao extends CrudRepository<DebtorCategory, Long>{
    DebtorCategory save(DebtorCategory category);

    List<DebtorCategory> findAll();

    DebtorCategory findByDescription(String description);

    DebtorCategory findById(Long id);

    void delete(DebtorCategory category);

    boolean exists(Long id);
}
