package com.benja.service.impl;

import com.benja.dao.wareshouse.*;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.warehouse.*;
import com.benja.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Service
public class WarehouseServiceImpl implements WarehouseService {

    @Autowired
    private WarehouseDao warehouseDao;

    @Autowired
    private WarehouseAssignStaffDao assignStaffDao;

    @Autowired
    private WarehouseJobTitleDao jobTitleDao;

    @Autowired
    private WarehouseLocationDao locationDao;

    @Autowired
    private WarehouseParameterDao parameterDao;

    @Autowired
    private WarehouseStaffDao staffDao;

    @Autowired
    private WarehouseZoneDao zoneDao;

    //Warehouse
    @Override
    public Warehouse saveWarehouse(Warehouse warehouse) {
        return warehouseDao.save(warehouse);
    }

    @Override
    public List<Warehouse> findAllWarehouses() {
        return warehouseDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllWarehousesShort() {
        List<Warehouse> warehouses;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        warehouses = warehouseDao.findAll();

        for (Warehouse ware : warehouses) {
            shortDataPackage.setId(ware.getId());
            shortDataPackage.setValue(ware.getName());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<ShortDataPackage> findAllWarehousesByBranch(Long id) {
        List<Warehouse> warehouses;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        warehouses = warehouseDao.findByBranch_id(id);

        for (Warehouse ware : warehouses) {
            shortDataPackage.setId(ware.getId());
            shortDataPackage.setValue(ware.getName());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public Warehouse findWarehouseByName(String name) {
        Warehouse warehouse = new Warehouse();

        if(name != null && !name.isEmpty())
            warehouse = warehouseDao.findByName(name);

        return warehouse;
    }

    @Override
    public Warehouse findWarehouseById(Long id) {
        return warehouseDao.findById(id);
    }

    @Override
    public boolean deleteWarehouse(Warehouse warehouse) {
        warehouseDao.delete(warehouse);
        return warehouseDao.exists(warehouse.getId());
    }

    @Override
    public WarehouseAssignStaff saveAssignStaff(WarehouseAssignStaff assignStaff) {
        return null;
    }

    @Override
    public List<WarehouseAssignStaff> findAllAssignStaffs() {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllAssignStaffsShort() {
        return null;
    }

    @Override
    public List<WarehouseAssignStaff> findAllAssignStaffsByStaff(Long id) {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllAssignStaffsByStaffShort(Long id) {
        return null;
    }

    @Override
    public List<WarehouseAssignStaff> findAllAssignStaffsByZone(Long id) {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllAssignStaffsByZoneShort(Long id) {
        return null;
    }

    @Override
    public List<WarehouseAssignStaff> findAllAssignStaffsByStaffAndZone(Long staffId, Long zoneId) {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllAssignStaffsByStaffAndZoneShort(Long staffId, Long zoneId) {
        return null;
    }

    @Override
    public WarehouseAssignStaff findAssignStaffById(Long id) {
        return null;
    }

    @Override
    public boolean deleteAssignStaff(WarehouseAssignStaff assignStaff) {
        return false;
    }

    @Override
    public WarehouseJobTitle saveJobTitle(WarehouseJobTitle jobTitle) {
        return null;
    }

    @Override
    public List<WarehouseJobTitle> findAllJobTitles() {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllJobTitlesShort() {
        return null;
    }

    @Override
    public WarehouseJobTitle findJobTitleByTitle(String title) {
        return null;
    }

    @Override
    public WarehouseJobTitle findJobTitleById(Long id) {
        return null;
    }

    @Override
    public boolean deleteJobTitle(WarehouseJobTitle jobTitle) {
        return false;
    }

    @Override
    public WarehouseLocation saveLocation(WarehouseLocation location) {
        return null;
    }

    @Override
    public List<WarehouseLocation> findAllLocations() {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllLocationsShort() {
        return null;
    }

    @Override
    public List<WarehouseLocation> findAllLocationsByZone(Long id) {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllLocationsByZoneShort(Long id) {
        return null;
    }

    @Override
    public WarehouseLocation findLocationByIdentifier(String title) {
        return null;
    }

    @Override
    public WarehouseLocation findLocationById(Long id) {
        return null;
    }

    @Override
    public boolean deleteLocation(WarehouseLocation location) {
        return false;
    }

    @Override
    public WarehouseParameter saveParamater(WarehouseParameter location) {
        return null;
    }

    @Override
    public List<WarehouseParameter> findAllParamaters() {
        return null;
    }

    @Override
    public WarehouseParameter findParamaterById(Long id) {
        return null;
    }

    @Override
    public boolean deleteParamater(WarehouseParameter location) {
        return false;
    }

    @Override
    public WarehouseStaff saveStaff(WarehouseStaff staff) {
        return null;
    }

    @Override
    public List<WarehouseStaff> findAllStaffs() {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllStaffsShort() {
        return null;
    }

    @Override
    public List<WarehouseStaff> findAllStaffsByJobTitle(Long id) {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllStaffsByJobTitleShort(Long id) {
        return null;
    }

    @Override
    public WarehouseStaff findStaffByName(String name) {
        return null;
    }

    @Override
    public WarehouseStaff findStaffById(Long id) {
        return null;
    }

    @Override
    public boolean deleteStaff(WarehouseStaff staff) {
        return false;
    }

    //Zone
    @Override
    public WarehouseZone saveZone(WarehouseZone zone) {
        return zoneDao.save(zone);
    }

    @Override
    public List<WarehouseZone> findAllZones() {
        return zoneDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllZonesByWarehouseShort(Long id) {
        List<WarehouseZone> zones;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        zones = zoneDao.findByWarehouse_id(id);

        for (WarehouseZone zon : zones) {
            shortDataPackage.setId(zon.getId());
            shortDataPackage.setValue(zon.getName());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<ShortDataPackage> findAllZonesShort() {
        List<WarehouseZone> zones;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        zones = zoneDao.findAll();

        for (WarehouseZone ware : zones) {
            shortDataPackage.setId(ware.getId());
            shortDataPackage.setValue(ware.getName());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public WarehouseZone findZoneByName(String name) {
        WarehouseZone zone = new WarehouseZone();

        if(name != null && !name.isEmpty())
            zone = zoneDao.findByName(name);

        return zone;
    }

    @Override
    public WarehouseZone findZoneById(Long id) {
        return zoneDao.findById(id);
    }

    @Override
    public boolean deleteZone(WarehouseZone zone) {
        zoneDao.delete(zone);
        return zoneDao.exists(zone.getId());
    }

    @Override
    public List<WarehouseZone> findAllZonesByWarehouse(Long id) {
        return null;
    }
}
