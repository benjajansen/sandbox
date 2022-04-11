package com.benja.dao.item;

import com.benja.model.item.ItemMaster;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface ItemMasterDao extends CrudRepository<ItemMaster, Long>{

    ItemMaster save(ItemMaster itemMaster);

    List<ItemMaster> findAll();

    ItemMaster findByCode(String itemCode);

    ItemMaster findById(Long id);
}
