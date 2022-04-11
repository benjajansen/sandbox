package com.benja.controller;

import com.benja.model.admin.*;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.warehouse.Warehouse;
import com.benja.model.warehouse.WarehousePackage;
import com.benja.service.AdminService;
import com.benja.service.SecurityService;
import com.benja.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by Ben on 24 Jul 2017.
 */
@RestController
@RequestMapping("/rest/warehouse")
public class WarehouseResource {

    @Autowired
    private WarehouseService warehouseService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private SecurityService securityService;
    
//Warehouse
    @RequestMapping(value = "/warehouse/add", method = RequestMethod.POST)
    public Warehouse addWarehouse(@RequestBody WarehousePackage warehousePackage) {
        Warehouse warehouse = new Warehouse();

        this.populateWarehouseFromPackage(warehouse, warehousePackage);

        return warehouseService.saveWarehouse(warehouse);
    }

    @RequestMapping(value = "/warehouse/id", method = RequestMethod.POST)
    public Warehouse getWarehouseById(@RequestBody Long id) {
        return warehouseService.findWarehouseById(id);
    }

    @RequestMapping(value = "/warehouse/update", method = RequestMethod.POST)
    public void updateWarehouse(@RequestBody WarehousePackage warehousePackage) {
        Warehouse warehouse = warehouseService.findWarehouseById(warehousePackage.getId());

        this.populateWarehouseFromPackage(warehouse, warehousePackage);

        warehouseService.saveWarehouse(warehouse);
    }

    @RequestMapping(value = "/warehouse/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getWarehouseAllShort() {
        return warehouseService.findAllWarehousesShort();
    }

    @RequestMapping(value = "/warehouse/getAllShortByBranch", method = RequestMethod.POST)
    public List<ShortDataPackage> getWarehouseAllShortByBranch(@RequestBody Long branchId) {
        return warehouseService.findAllWarehousesByBranch(branchId);
    }

    @RequestMapping(value = "/warehouse/delete", method = RequestMethod.POST)
    public boolean deleteWarehouse(@RequestBody Warehouse warehouse) {
        return warehouseService.deleteWarehouse(warehouse);
    }

    private Warehouse populateWarehouseFromPackage(Warehouse warehouse, WarehousePackage warehousePackage) {
        try {
            warehouse.setName(warehousePackage.getDescription());

            if(warehousePackage.getBranch() != null && !warehousePackage.getBranch().isEmpty())
                warehouse.setBranch(adminService.findBranchByDescription(warehousePackage.getBranch()));
        } catch (Exception e) {
            return warehouse;
        }

        return warehouse;
    }
}
