package com.benja.dao.creditor;

import com.benja.model.creditor.CreditorParameter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface CreditorParameterDao extends CrudRepository<CreditorParameter, Long>{
    CreditorParameter save(CreditorParameter parameter);

    List<CreditorParameter> findAll();

    CreditorParameter findById(Long id);
}
