package com.benja.service;

import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.warehouse.*;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
public interface WarehouseService {
    
    Warehouse saveWarehouse(Warehouse warehouse);

    List<Warehouse> findAllWarehouses();

    List<ShortDataPackage> findAllWarehousesShort();

    List<ShortDataPackage> findAllWarehousesByBranch(Long id);

    Warehouse findWarehouseByName(String name);

    Warehouse findWarehouseById(Long id);

    boolean deleteWarehouse(Warehouse warehouse);
    
//AssignStaff
    WarehouseAssignStaff saveAssignStaff(WarehouseAssignStaff assignStaff);

    List<WarehouseAssignStaff> findAllAssignStaffs();

    List<ShortDataPackage> findAllAssignStaffsShort();

    List<WarehouseAssignStaff> findAllAssignStaffsByStaff(Long id);

    List<ShortDataPackage> findAllAssignStaffsByStaffShort(Long id);

    List<WarehouseAssignStaff> findAllAssignStaffsByZone(Long id);

    List<ShortDataPackage> findAllAssignStaffsByZoneShort(Long id);

    List<WarehouseAssignStaff> findAllAssignStaffsByStaffAndZone(Long staffId, Long zoneId);

    List<ShortDataPackage> findAllAssignStaffsByStaffAndZoneShort(Long staffId, Long zoneId);

    WarehouseAssignStaff findAssignStaffById(Long id);

    boolean deleteAssignStaff(WarehouseAssignStaff assignStaff);
    
//JobTitle
    WarehouseJobTitle saveJobTitle(WarehouseJobTitle jobTitle);

    List<WarehouseJobTitle> findAllJobTitles();

    List<ShortDataPackage> findAllJobTitlesShort();

    WarehouseJobTitle findJobTitleByTitle(String title);

    WarehouseJobTitle findJobTitleById(Long id);

    boolean deleteJobTitle(WarehouseJobTitle jobTitle);

//Location
    WarehouseLocation saveLocation(WarehouseLocation location);

    List<WarehouseLocation> findAllLocations();

    List<ShortDataPackage> findAllLocationsShort();

    List<WarehouseLocation> findAllLocationsByZone(Long id);

    List<ShortDataPackage> findAllLocationsByZoneShort(Long id);

    WarehouseLocation findLocationByIdentifier(String title);

    WarehouseLocation findLocationById(Long id);

    boolean deleteLocation(WarehouseLocation location);

//Parameter
    WarehouseParameter saveParamater(WarehouseParameter location);

    List<WarehouseParameter> findAllParamaters();

    WarehouseParameter findParamaterById(Long id);

    boolean deleteParamater(WarehouseParameter location);
    
//Staff
    WarehouseStaff saveStaff(WarehouseStaff staff);

    List<WarehouseStaff> findAllStaffs();

    List<ShortDataPackage> findAllStaffsShort();

    List<WarehouseStaff> findAllStaffsByJobTitle(Long id);

    List<ShortDataPackage> findAllStaffsByJobTitleShort(Long id);

    WarehouseStaff findStaffByName(String name);

    WarehouseStaff findStaffById(Long id);

    boolean deleteStaff(WarehouseStaff staff);
    
//Zone
    WarehouseZone saveZone(WarehouseZone zone);

    List<WarehouseZone> findAllZones();

    List<ShortDataPackage> findAllZonesShort();

    List<WarehouseZone> findAllZonesByWarehouse(Long id);

    List<ShortDataPackage> findAllZonesByWarehouseShort(Long id);

    WarehouseZone findZoneByName(String name);

    WarehouseZone findZoneById(Long id);

    boolean deleteZone(WarehouseZone zone);


}
