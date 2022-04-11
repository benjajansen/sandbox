package com.benja.service;

import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.salesOrder.SalesOrderDetail;
import com.benja.model.salesOrder.SalesOrderHeader;

import java.util.List;

/**
 * Created by Benja on 14/10/2017.
 */
public interface SalesOrderService {

    SalesOrderHeader saveSalesOrderHeader(SalesOrderHeader salesOrderHeader);

    List<SalesOrderHeader> findAllSalesOrderHeaders();

    List<ShortDataPackage> findAllSalesOrderHeadersShortByDebtorAndCostCentre(Long debtorId, Long costCentreId);

    List<ShortDataPackage> findAllSalesOrderHeadersShort();

    SalesOrderHeader findSalesOrderHeaderById(Long id);

//SalesOrderDetail

    SalesOrderDetail saveSalesOrderDetail(SalesOrderDetail salesOrderDetail);

    SalesOrderDetail findSalesOrderDetailById(Long id);

    List<SalesOrderDetail> findAllSalesOrderDetails();

    List<SalesOrderDetail> findAllSalesOrderDetailByHeaderId(Long id);

    boolean deleteSalesOrderDetail(SalesOrderDetail salesOrderDetail);
}