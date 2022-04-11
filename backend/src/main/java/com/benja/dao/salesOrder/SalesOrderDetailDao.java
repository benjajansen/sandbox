package com.benja.dao.salesOrder;

import com.benja.model.salesOrder.SalesOrderDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface SalesOrderDetailDao extends CrudRepository<SalesOrderDetail, Long>{

    SalesOrderDetail save(SalesOrderDetail salesOrderDetail);

    List<SalesOrderDetail> findAll();

    List<SalesOrderDetail> findBySalesOrderHeader_id(Long id);

    SalesOrderDetail findById(Long id);

    void delete(SalesOrderDetail salesOrderDetail);

    boolean exists(Long id);
}
