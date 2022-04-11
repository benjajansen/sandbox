package com.benja.controller;

import com.benja.model.item.ItemMasterAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.item.*;
import com.benja.service.AdminService;
import com.benja.service.ItemService;
import com.benja.service.WarehouseService;
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
@RequestMapping("/rest/item")
public class ItemResource {

    @Autowired
    private ItemService itemService;
    
    @Autowired
    private AdminService adminService;
    
    @Autowired
    private WarehouseService warehouseService;

    @RequestMapping(value = "/itemMaster/add", method = RequestMethod.POST)
    public ItemMaster addItemMaster(@RequestBody ItemMasterPackage creditorPackage) {
        ItemMaster item = new ItemMaster();

        this.populateItemMasterFromPackage(item, creditorPackage);
        
        return itemService.saveItemMaster(item);
    }

    @RequestMapping(value = "/itemMaster/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getItemMasterAllShort() {
        return itemService.findAllItemMastersShort();
    }

    @RequestMapping(value = "/itemMaster/getAllAuto", method = RequestMethod.POST)
    public List<ItemMasterAutoComp> getItemMasterAllAuto() {
        return itemService.findAllItemMastersAuto();
    }

    @RequestMapping(value = "/itemMaster/code", method = RequestMethod.POST)
    public ItemMaster getItemMasterByCode(@RequestBody String code) {
        return itemService.findItemMasterByCode(code);
    }

    @RequestMapping(value = "/itemMaster/id", method = RequestMethod.POST)
    public ItemMaster getItemMasterById(@RequestBody Long id) {
        return itemService.findItemMasterById(id);
    }

    @RequestMapping(value = "/itemMaster/update", method = RequestMethod.POST)
    public void updateItemMaster(@RequestBody ItemMasterPackage creditorPackage) {
        ItemMaster currentItemMaster = itemService.findItemMasterByCode(creditorPackage.getCode());

        this.populateItemMasterFromPackage(currentItemMaster, creditorPackage);

        itemService.saveItemMaster(currentItemMaster);
    }

    private ItemMaster populateItemMasterFromPackage(ItemMaster itemMaster, ItemMasterPackage itemMasterPackage) {
        try {

            itemMaster.setCode(itemMasterPackage.getCode());
            itemMaster.setDescription(itemMasterPackage.getDescription());
            itemMaster.setComments(itemMasterPackage.getComments());

            itemMaster.setSuspend(itemMasterPackage.isSuspend());
            itemMaster.setSuspendDate(itemMasterPackage.getSuspendDate());

            itemMaster.setModDate(itemMasterPackage.getModDate());
            itemMaster.setModUser(itemMasterPackage.getModUser());

            if(itemMaster.getCreateUser() == null && itemMasterPackage.getCreateUser() != null)
                itemMaster.setCreateUser(itemMasterPackage.getCreateUser());

            if(itemMasterPackage.getMeasure() != null && !itemMasterPackage.getMeasure().isEmpty())
                itemMaster.setMeasure(itemService.findUnitOfMeasureByDescription(itemMasterPackage.getMeasure()));

            if(itemMasterPackage.getGroup() != null && !itemMasterPackage.getGroup().isEmpty())
                itemMaster.setGroup(itemService.findGroupByDescription(itemMasterPackage.getGroup()));

            if(itemMasterPackage.getCategory() != null && !itemMasterPackage.getCategory().isEmpty())
                itemMaster.setCategory(itemService.findCategoryByDescription(itemMasterPackage.getCategory()));
        }
        catch (Exception e) {
            return itemMaster;
        }

        return itemMaster;
    }
    
//Category

    @RequestMapping(value = "/category/add", method = RequestMethod.POST)
    public ItemCategory addCategory(@RequestBody ItemCategory classification) {
        return itemService.saveCategory(classification);
    }

    @RequestMapping(value = "/category/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCategoryAllShort() {
        return itemService.findAllCategoriesShort();
    }

    @RequestMapping(value = "/category/id", method = RequestMethod.POST)
    public ItemCategory getCategoryById(@RequestBody Long id) {
        return itemService.findCategoryById(id);
    }

    @RequestMapping(value = "/category/update", method = RequestMethod.POST)
    public void updateCategory(@RequestBody ItemCategory classification) {
        ItemCategory currentCategory = itemService.findCategoryById(classification.getId());
        currentCategory.setDescription(classification.getDescription());
        itemService.saveCategory(currentCategory);
    }

    @RequestMapping(value = "/category/delete", method = RequestMethod.POST)
    public boolean deleteCategory(@RequestBody ItemCategory classification) {
        return itemService.deleteCategory(classification);
    }

//Group

    @RequestMapping(value = "/group/add", method = RequestMethod.POST)
    public ItemGroup addGroup(@RequestBody ItemGroup group) {
        return itemService.saveGroup(group);
    }

    @RequestMapping(value = "/group/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getGroupAllShort() {
        return itemService.findAllGroupsShort();
    }

    @RequestMapping(value = "/group/id", method = RequestMethod.POST)
    public ItemGroup getGroupById(@RequestBody Long id) {
        return itemService.findGroupById(id);
    }

    @RequestMapping(value = "/group/update", method = RequestMethod.POST)
    public void updateGroup(@RequestBody ItemGroup group) {
        ItemGroup currentGroup = itemService.findGroupById(group.getId());
        currentGroup.setDescription(group.getDescription());
        itemService.saveGroup(currentGroup);
    }

    @RequestMapping(value = "/group/delete", method = RequestMethod.POST)
    public boolean deleteGroup(@RequestBody ItemGroup group) {
        return itemService.deleteGroup(group);
    }

//Unit of Measure

    @RequestMapping(value = "/unitOfMeasure/add", method = RequestMethod.POST)
    public ItemUnitOfMeasure addUnitOfMeasure(@RequestBody ItemUnitOfMeasure unitOfMeasure) {
        return itemService.saveUnitOfMeasure(unitOfMeasure);
    }

    @RequestMapping(value = "/unitOfMeasure/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getUnitOfMeasureAllShort() {
        return itemService.findAllUnitOfMeasuresShort();
    }

    @RequestMapping(value = "/unitOfMeasure/id", method = RequestMethod.POST)
    public ItemUnitOfMeasure getUnitOfMeasureById(@RequestBody Long id) {
        return itemService.findUnitOfMeasureById(id);
    }

    @RequestMapping(value = "/unitOfMeasure/update", method = RequestMethod.POST)
    public void updateUnitOfMeasure(@RequestBody ItemUnitOfMeasure unitOfMeasure) {
        ItemUnitOfMeasure currentUnitOfMeasure = itemService.findUnitOfMeasureById(unitOfMeasure.getId());
        currentUnitOfMeasure.setDescription(unitOfMeasure.getDescription());
        itemService.saveUnitOfMeasure(currentUnitOfMeasure);
    }

    @RequestMapping(value = "/unitOfMeasure/delete", method = RequestMethod.POST)
    public boolean deleteUnitOfMeasure(@RequestBody ItemUnitOfMeasure unitOfMeasure) {
        return itemService.deleteUnitOfMeasure(unitOfMeasure);
    }
    
//Location
    @RequestMapping(value = "/location/add", method = RequestMethod.POST)
    public ItemLocation addItemLocation(@RequestBody ItemLocationPackage locationPackage) {
        ItemLocation item = new ItemLocation();
    
        this.populateItemLocationFromPackage(item, locationPackage);
    
        return itemService.saveLocation(item);
    }

    @RequestMapping(value = "/location/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getItemLocationAllShort() {
        return itemService.findAllLocationsShort();
    }

    @RequestMapping(value = "/location/getAllShortByWarehouseAndZone", method = RequestMethod.POST)
    public List<ShortDataPackage> getItemLocationShortByDebtorAndCostCentre(@RequestBody Long warehouseId, @RequestBody Long zoneId) {
        return itemService.findAllLocationsShortByWarehouseAndZone(warehouseId, zoneId);
    }

    @RequestMapping(value = "/location/orderNo", method = RequestMethod.POST)
    public ItemLocation getItemLocationByOrderNo(@RequestBody Long id) {
        return itemService.findLocationById(id);
    }

    @RequestMapping(value = "/location/update", method = RequestMethod.POST)
    public ItemLocation updateItemLocation(@RequestBody ItemLocationPackage locationPackage) {
        ItemLocation currentItemLocation = itemService.findLocationById(locationPackage.getId());

        this.populateItemLocationFromPackage(currentItemLocation, locationPackage);

        return itemService.saveLocation(currentItemLocation);
    }

    private ItemLocation populateItemLocationFromPackage(ItemLocation location, ItemLocationPackage locationPackage) {
        try {

            location.setLocation(locationPackage.getLocation());
            location.setPickSeq(locationPackage.getPickSeq());
            location.setPutAway(locationPackage.getPutAway());

            location.setCubeSize(locationPackage.getCubeSize());
            location.setLocationHold(locationPackage.isLocationHold());

            if(location.getCreateUser() == null && locationPackage.getCreateUser() != null)
                location.setCreateUser(locationPackage.getCreateUser());

            if(locationPackage.getWarehouse() != null && !locationPackage.getWarehouse().isEmpty())
                location.setWarehouse(warehouseService.findWarehouseByName(locationPackage.getWarehouse()));

            if(locationPackage.getZone() != null && !locationPackage.getZone().isEmpty())
                location.setZone(warehouseService.findZoneByName(locationPackage.getZone()));
        }
        catch (Exception e) {
            return location;
        }

        return location;
    }
}
