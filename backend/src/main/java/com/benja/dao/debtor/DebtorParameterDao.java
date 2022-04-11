package com.benja.dao.debtor;

import com.benja.model.debtor.DebtorParameter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface DebtorParameterDao extends CrudRepository<DebtorParameter, Long>{
    DebtorParameter save(DebtorParameter parameter);

    List<DebtorParameter> findAll();

    DebtorParameter findById(Long id);
}
