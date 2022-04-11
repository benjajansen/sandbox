package com.benja.dao.debtor;

import com.benja.model.debtor.Debtor;
import com.benja.model.debtor.DebtorCostCentre;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface DebtorCostCentreDao extends CrudRepository<DebtorCostCentre, Long>{

    DebtorCostCentre save(DebtorCostCentre costCentre);

    List<DebtorCostCentre> findAll();

    List<DebtorCostCentre> findByDebtor_id(Long id);

    DebtorCostCentre findByCcNo(String ccNo);

    DebtorCostCentre findById(Long id);
}
