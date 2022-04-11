package com.benja.service.impl;

import com.benja.dao.salesOrder.SalesOrderHeaderDao;
import com.benja.dao.salesOrder.SalesOrderDetailDao;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.salesOrder.SalesOrderDetail;
import com.benja.model.salesOrder.SalesOrderHeader;
import com.benja.service.SalesOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@Service
public class SalesOrderServiceImpl implements SalesOrderService {

    @Autowired
    private SalesOrderHeaderDao salesOrderHeaderDao;

    @Autowired
    private SalesOrderDetailDao salesOrderDetailDao;

    @Override
    public SalesOrderHeader saveSalesOrderHeader(SalesOrderHeader salesOrder) {
        SalesOrderHeader so = salesOrder;
        return salesOrderHeaderDao.save(so);
    }

    @Override
    public List<SalesOrderHeader> findAllSalesOrderHeaders() {
        return salesOrderHeaderDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllSalesOrderHeadersShortByDebtorAndCostCentre(Long debtorId, Long costCentreId) {
        List<SalesOrderHeader> sales;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        sales = salesOrderHeaderDao.findByDebtor_idAndCostCentre_id(debtorId, costCentreId);

        for(SalesOrderHeader so : sales) {
            shortDataPackage.setId(so.getId());
            shortDataPackage.setValue(so.getCustOrderNo());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<ShortDataPackage> findAllSalesOrderHeadersShort() {
        List<SalesOrderHeader> sales;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        sales = salesOrderHeaderDao.findAll();

        for (SalesOrderHeader so : sales) {
            shortDataPackage.setId(so.getId());
            shortDataPackage.setValue(so.getCustOrderNo());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SalesOrderHeader findSalesOrderHeaderById(Long id) {
        SalesOrderHeader so = new SalesOrderHeader();

        so = salesOrderHeaderDao.findById(id);

        return so;
    }

//Sales Order Detail
    @Override
    public SalesOrderDetail saveSalesOrderDetail(SalesOrderDetail salesOrderDetail) {
        SalesOrderDetail soD = salesOrderDetail;
        return salesOrderDetailDao.save(soD);
    }

    @Override
    public List<SalesOrderDetail> findAllSalesOrderDetails() {
        return salesOrderDetailDao.findAll();
    }

    @Override
    public SalesOrderDetail findSalesOrderDetailById(Long id) {
        return salesOrderDetailDao.findById(id);
    }

    @Override
    public List<SalesOrderDetail> findAllSalesOrderDetailByHeaderId(Long id) {
        return salesOrderDetailDao.findBySalesOrderHeader_id(id);
    }

    @Override
    public boolean deleteSalesOrderDetail(SalesOrderDetail salesOrderDetail) {
        salesOrderDetailDao.delete(salesOrderDetail);
        return salesOrderDetailDao.exists(salesOrderDetail.getId());
    }
}
