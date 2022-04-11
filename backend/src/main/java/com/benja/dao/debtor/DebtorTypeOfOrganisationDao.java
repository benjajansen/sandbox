package com.benja.dao.debtor;

import com.benja.model.debtor.DebtorTypeOfOrganisation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface DebtorTypeOfOrganisationDao extends CrudRepository<DebtorTypeOfOrganisation, Long>{
    DebtorTypeOfOrganisation save(DebtorTypeOfOrganisation typeOfOrganisation);

    List<DebtorTypeOfOrganisation> findAll();

    DebtorTypeOfOrganisation findByDescription(String description);

    DebtorTypeOfOrganisation findById(Long id);

    void delete(DebtorTypeOfOrganisation typeOfOrganisation);

    boolean exists(Long id);
}
