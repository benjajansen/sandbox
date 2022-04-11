package com.benja.controller;

import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.salesOrder.SalesOrderDetail;
import com.benja.model.salesOrder.SalesOrderDetailPackage;
import com.benja.model.salesOrder.SalesOrderHeader;
import com.benja.model.salesOrder.SalesOrderPackage;
import com.benja.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@RestController
@RequestMapping("/rest/salesOrder")
public class SalesOrderResource {

    @Autowired
    private SalesOrderService salesOrderService;
    
    @Autowired
    private DebtorService debtorService;
    
    @Autowired
    private ItemService itemService;

    @RequestMapping(value = "/header/add", method = RequestMethod.POST)
    public SalesOrderHeader addSalesOrder(@RequestBody SalesOrderPackage salesOrderPackage) {
        SalesOrderHeader item = new SalesOrderHeader();

        this.populateSalesOrderFromPackage(item, salesOrderPackage);
        
        return salesOrderService.saveSalesOrderHeader(item);
    }

    @RequestMapping(value = "/header/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getSalesOrderAllShort() {
        return salesOrderService.findAllSalesOrderHeadersShort();
    }

    @RequestMapping(value = "/header/getAllShortByDebtorAndCostCentre", method = RequestMethod.POST)
    public List<ShortDataPackage> getSalesOrderShortByDebtorAndCostCentre(@RequestBody Long debtorId, @RequestBody Long costCentreId) {
        return salesOrderService.findAllSalesOrderHeadersShortByDebtorAndCostCentre(debtorId, costCentreId);
    }

    @RequestMapping(value = "/header/id", method = RequestMethod.POST)
    public SalesOrderHeader getSalesOrderByOrderNo(@RequestBody Long id) {
        return salesOrderService.findSalesOrderHeaderById(id);
    }

    @RequestMapping(value = "/header/update", method = RequestMethod.POST)
    public SalesOrderHeader updateSalesOrder(@RequestBody SalesOrderPackage salesOrderPackage) {
        SalesOrderHeader currentSalesOrder = salesOrderService.findSalesOrderHeaderById(salesOrderPackage.getOrderNo());

        this.populateSalesOrderFromPackage(currentSalesOrder, salesOrderPackage);

        return salesOrderService.saveSalesOrderHeader(currentSalesOrder);
    }

    private SalesOrderHeader populateSalesOrderFromPackage(SalesOrderHeader SalesOrder, SalesOrderPackage SalesOrderPackage) {
        try {

            SalesOrder.setId(SalesOrderPackage.getOrderNo());
            SalesOrder.setOrderDate(SalesOrderPackage.getOrderDate());

            SalesOrder.setCustOrderNo(SalesOrderPackage.getCustOrderNo());
            SalesOrder.setReleaseNo(SalesOrderPackage.getReleaseNo());
            SalesOrder.setStreet1(SalesOrderPackage.getStreet1());
            SalesOrder.setStreet2(SalesOrderPackage.getStreet2());
            SalesOrder.setStreet3(SalesOrderPackage.getStreet3());
            SalesOrder.setStreet4(SalesOrderPackage.getStreet4());
            SalesOrder.setStreetPostalCode(SalesOrderPackage.getStreetPostalCode());
            SalesOrder.setOppSName(SalesOrderPackage.getOppSName());
            SalesOrder.setOppFName(SalesOrderPackage.getOppFName());
            SalesOrder.setOppCellNo(SalesOrderPackage.getOppCellNo());
            SalesOrder.setOppEmail(SalesOrderPackage.getOppEmail());
            SalesOrder.setGps(SalesOrderPackage.getGps());


            SalesOrder.setDelInstructions(SalesOrderPackage.getDelInstruction());

            SalesOrder.setModDate(SalesOrderPackage.getModDate());
            SalesOrder.setModUser(SalesOrderPackage.getModUser());

            if(SalesOrder.getCreateUser() == null && SalesOrderPackage.getCreateUser() != null)
                SalesOrder.setCreateUser(SalesOrderPackage.getCreateUser());

            /*
            if(SalesOrderPackage.getStatus() != null && !SalesOrderPackage.getStatus().isEmpty())
                SalesOrder.setStatus(salesOrderService.findStatusByDescription(SalesOrderPackage.getStatus()));
            */

            if(SalesOrderPackage.getDebtor() != null && !SalesOrderPackage.getDebtor().isEmpty())
                SalesOrder.setDebtor(debtorService.findDebtorByAccNo(SalesOrderPackage.getDebtor()));

            if(SalesOrderPackage.getCostCentre() != null && !SalesOrderPackage.getCostCentre().isEmpty())
                SalesOrder.setCostCentre(debtorService.findCostCentreByCcNo(SalesOrderPackage.getCostCentre()));


        }
        catch (Exception e) {
            return SalesOrder;
        }

        return SalesOrder;
    }
    
//Sales Order Detail
    @RequestMapping(value = "/detail/add", method = RequestMethod.POST)
    public SalesOrderDetail addSalesOrderDetail(@RequestBody SalesOrderDetailPackage salesOrderDetailPackage) {
        SalesOrderDetail soD = new SalesOrderDetail();

        this.populateSalesOrderDetailFromPackage(soD, salesOrderDetailPackage);

        return salesOrderService.saveSalesOrderDetail(soD);
    }

    @RequestMapping(value = "/detail/getAllHeaderId", method = RequestMethod.POST)
    public List<SalesOrderDetail> getSalesOrderDetailByHeaderId(@RequestBody Long id) {
        List<SalesOrderDetail> details;

        details = salesOrderService.findAllSalesOrderDetailByHeaderId(id);

        return details;
    }

    @RequestMapping(value = "/detail/update", method = RequestMethod.POST)
    public void updateSalesOrderDetail(@RequestBody SalesOrderDetailPackage salesOrderDetailPackage) {
        SalesOrderDetail currentSalesOrderDetail = salesOrderService.findSalesOrderDetailById(salesOrderDetailPackage.getId());

        this.populateSalesOrderDetailFromPackage(currentSalesOrderDetail, salesOrderDetailPackage);
        /*
        currentSalesOrderDetail.setItem(salesOrderDetail.getItem());
        currentSalesOrderDetail.setQuantity(salesOrderDetail.getQuantity());
        currentSalesOrderDetail.setPickingOrder(salesOrderDetail.getPickingOrder());
*/

        salesOrderService.saveSalesOrderDetail(currentSalesOrderDetail);
    }

    private SalesOrderDetail populateSalesOrderDetailFromPackage(SalesOrderDetail SalesOrderDetail, SalesOrderDetailPackage SalesOrderDetailPackage) {
        try {

            SalesOrderDetail.setId(SalesOrderDetailPackage.getId());
            SalesOrderDetail.setPickMethod(SalesOrderDetailPackage.getPickingOrder());

            /*
            if(SalesOrderDetail.getSalesOrder() == null && SalesOrderDetailPackage.getSalesOrder() != null)
                SalesOrderDetail.setSalesOrder(salesOrderService.findSalesOrderByOrderNo(SalesOrderDetailPackage.getSalesOrder()));

            if(SalesOrderDetailPackage.getItem() != null && !SalesOrderDetailPackage.getItem().isEmpty())
                SalesOrderDetail.setItem(itemService.findItemMasterByCode(SalesOrderDetailPackage.getItem()));

            */

        }
        catch (Exception e) {
            return SalesOrderDetail;
        }

        return SalesOrderDetail;
    }

    @RequestMapping(value = "/detail/delete", method = RequestMethod.POST)
    public boolean deleteSalesOrderDetail(@RequestBody SalesOrderDetail salesOrderDetail) {

        return salesOrderService.deleteSalesOrderDetail(salesOrderDetail);
    }
}
