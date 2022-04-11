package com.benja.service;

import com.benja.model.item.ItemMasterAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.item.*;

import java.util.List;

/**
 * Created by Benja on 14/10/2017.
 */
public interface ItemService {

    ItemMaster saveItemMaster(ItemMaster itemMaster);

    List<ItemMaster> findAllItemMasters();

    List<ShortDataPackage> findAllItemMastersShort();

    List<ItemMasterAutoComp> findAllItemMastersAuto();

    ItemMaster findItemMasterByCode(String code);

    ItemMaster findItemMasterById(Long id);

//Category
    ItemCategory saveCategory(ItemCategory category);

    List<ItemCategory> findAllCategories();

    List<ShortDataPackage> findAllCategoriesShort();

    ItemCategory findCategoryByDescription(String description);

    ItemCategory findCategoryById(Long id);

    boolean deleteCategory(ItemCategory category);

//Group
    ItemGroup saveGroup(ItemGroup group);

    List<ItemGroup> findAllGroups();

    List<ShortDataPackage> findAllGroupsShort();

    ItemGroup findGroupByDescription(String description);

    ItemGroup findGroupById(Long id);

    boolean deleteGroup(ItemGroup group);

//Unit of Measure
    ItemUnitOfMeasure saveUnitOfMeasure(ItemUnitOfMeasure group);

    List<ItemUnitOfMeasure> findAllUnitOfMeasures();

    List<ShortDataPackage> findAllUnitOfMeasuresShort();

    ItemUnitOfMeasure findUnitOfMeasureByDescription(String description);

    ItemUnitOfMeasure findUnitOfMeasureById(Long id);

    boolean deleteUnitOfMeasure(ItemUnitOfMeasure unitOfMeasure);

//Location
    ItemLocation saveLocation(ItemLocation location);

    List<ItemLocation> findAllLocations();

    List<ShortDataPackage> findAllLocationsShortByWarehouseAndZone(Long warehouseId, Long zoneId);

    List<ShortDataPackage> findAllLocationsShort();

    ItemLocation findLocationById(Long id);

//Item Link
    boolean saveItemLink(ItemLink itemLink);

    List<ItemLink> findAllItemLink();

    List<ItemLink> findAllItemLinkByDebtorAndItem(Long debtorId, String itemCode);
}