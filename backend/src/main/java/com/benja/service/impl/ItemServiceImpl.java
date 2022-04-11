package com.benja.service.impl;

import com.benja.dao.item.*;
import com.benja.model.item.ItemMasterAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.item.*;
import com.benja.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemMasterDao itemMasterDao;

    @Autowired
    private ItemLinkDao itemLinkDao;

    @Autowired
    private ItemCategoryDao categoryDao;

    @Autowired
    private ItemGroupDao groupDao;

    @Autowired
    private ItemUnitOfMeasureDao unitOfMeasureDao;

    @Autowired
    private ItemLocationDao locationDao;

    @Override
    public ItemMaster saveItemMaster(ItemMaster itemMaster) {
        ItemMaster item = itemMaster;
        return itemMasterDao.save(item);
    }

    @Override
    public List<ItemMaster> findAllItemMasters() {
        return itemMasterDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllItemMastersShort() {
        List<ItemMaster> items;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        items = itemMasterDao.findAll();

        for (ItemMaster item : items) {
            ShortDataPackage.setId(item.getId());
            ShortDataPackage.setValue(item.getCode());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<ItemMasterAutoComp> findAllItemMastersAuto() {
        List<ItemMaster> items;
        List<ItemMasterAutoComp> lstItemMasterAutoComp = new ArrayList<ItemMasterAutoComp>();
        ItemMasterAutoComp itemAutoComp = new ItemMasterAutoComp();

        items = itemMasterDao.findAll();

        for (ItemMaster item : items) {
            itemAutoComp.setId(item.getId());
            itemAutoComp.setCode(item.getCode());
            itemAutoComp.setDescription(item.getDescription());
            lstItemMasterAutoComp.add(itemAutoComp);
            itemAutoComp = new ItemMasterAutoComp();
        }

        return lstItemMasterAutoComp;
    }
    
    @Override
    public ItemMaster findItemMasterByCode(String code) {
        ItemMaster item = new ItemMaster();

        if(code != null && !code.isEmpty())
            item = itemMasterDao.findByCode(code);

        return item;
    }

    @Override
    public ItemMaster findItemMasterById(Long id) {
        ItemMaster cred = new ItemMaster();

        cred = itemMasterDao.findById(id);

        return cred;
    }

//Category
    @Override
    public ItemCategory saveCategory(ItemCategory category) {
        return categoryDao.save(category);
    }

    @Override
    public List<ItemCategory> findAllCategories() {
        return categoryDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllCategoriesShort() {
        List<ItemCategory> categories;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        categories = categoryDao.findAll();

        for (ItemCategory cat : categories) {
            ShortDataPackage.setId(cat.getId());
            ShortDataPackage.setValue(cat.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public ItemCategory findCategoryByDescription(String description) {
        ItemCategory category = new ItemCategory();

        if(description != null && !description.isEmpty())
            category = categoryDao.findByDescription(description);

        return category;
    }

    @Override
    public ItemCategory findCategoryById(Long id) {
        return categoryDao.findById(id);
    }

    @Override
    public boolean deleteCategory(ItemCategory category) {
        categoryDao.delete(category);
        return categoryDao.exists(category.getId());
    }

//Group
    @Override
    public ItemGroup saveGroup(ItemGroup group) {
        return groupDao.save(group);
    }

    @Override
    public List<ItemGroup> findAllGroups() {
        return groupDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllGroupsShort() {
        List<ItemGroup> groups;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        groups = groupDao.findAll();

        for (ItemGroup grp : groups) {
            ShortDataPackage.setId(grp.getId());
            ShortDataPackage.setValue(grp.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public ItemGroup findGroupByDescription(String description) {
        ItemGroup group = new ItemGroup();

        if(description != null && !description.isEmpty())
            group = groupDao.findByDescription(description);

        return group;
    }

    @Override
    public ItemGroup findGroupById(Long id) {
        return groupDao.findById(id);
    }

    @Override
    public boolean deleteGroup(ItemGroup group) {
        groupDao.delete(group);
        return groupDao.exists(group.getId());
    }

//Unit of Measure
    @Override
    public ItemUnitOfMeasure saveUnitOfMeasure(ItemUnitOfMeasure unitOfMeasure) {
        return unitOfMeasureDao.save(unitOfMeasure);
    }

    @Override
    public List<ItemUnitOfMeasure> findAllUnitOfMeasures() {
        return unitOfMeasureDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllUnitOfMeasuresShort() {
        List<ItemUnitOfMeasure> unitOfMeasures;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        unitOfMeasures = unitOfMeasureDao.findAll();

        for (ItemUnitOfMeasure grp : unitOfMeasures) {
            ShortDataPackage.setId(grp.getId());
            ShortDataPackage.setValue(grp.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public ItemUnitOfMeasure findUnitOfMeasureByDescription(String description) {
        ItemUnitOfMeasure unitOfMeasure = new ItemUnitOfMeasure();

        if(description != null && !description.isEmpty())
            unitOfMeasure = unitOfMeasureDao.findByDescription(description);

        return unitOfMeasure;
    }

    @Override
    public ItemUnitOfMeasure findUnitOfMeasureById(Long id) {
        return unitOfMeasureDao.findById(id);
    }

    @Override
    public boolean deleteUnitOfMeasure(ItemUnitOfMeasure unitOfMeasure) {
        unitOfMeasureDao.delete(unitOfMeasure);
        return unitOfMeasureDao.exists(unitOfMeasure.getId());
    }
    
//Location
    @Override
    public ItemLocation saveLocation(ItemLocation location) {
        ItemLocation so = location;
        return locationDao.save(so);
    }

    @Override
    public List<ItemLocation> findAllLocations() {
        return locationDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllLocationsShortByWarehouseAndZone(Long warehouseId, Long zoneId) {
        List<ItemLocation> locations;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        locations = locationDao.findByWarehouse_idAndZone_id(warehouseId, zoneId);

        for(ItemLocation loc : locations) {
            shortDataPackage.setId(loc.getId());
            shortDataPackage.setValue(loc.getLocation());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<ShortDataPackage> findAllLocationsShort() {
        List<ItemLocation> locations;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage shortDataPackage = new ShortDataPackage();

        locations = locationDao.findAll();

        for (ItemLocation so : locations) {
            shortDataPackage.setId(so.getId());
            shortDataPackage.setValue(so.getLocation());
            lstShortDataPackage.add(shortDataPackage);
            shortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public ItemLocation findLocationById(Long id) {
        ItemLocation location = locationDao.findById(id);

        return location;
    }

//Item Link
    @Override
    public boolean saveItemLink(ItemLink itemLink) {
        return false;
    }

    @Override
    public List<ItemLink> findAllItemLink() {
        return null;
    }

    @Override
    public List<ItemLink> findAllItemLinkByDebtorAndItem(Long debtorId, String itemCode) {
        return null;
    }
}
