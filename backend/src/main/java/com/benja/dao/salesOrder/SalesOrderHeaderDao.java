package com.benja.dao.salesOrder;

import com.benja.model.salesOrder.SalesOrderHeader;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface SalesOrderHeaderDao extends CrudRepository<SalesOrderHeader, Long>{

    SalesOrderHeader save(SalesOrderHeader salesOrder);

    List<SalesOrderHeader> findAll();

    List<SalesOrderHeader> findByDebtor_idAndCostCentre_id(Long debtorId, Long costCentreId);

    SalesOrderHeader findById(Long id);
}
