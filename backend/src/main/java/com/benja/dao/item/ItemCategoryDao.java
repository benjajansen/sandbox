package com.benja.dao.item;

import com.benja.model.item.ItemCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface ItemCategoryDao extends CrudRepository<ItemCategory, Long>{

    ItemCategory save(ItemCategory category);

    List<ItemCategory> findAll();

    ItemCategory findByDescription(String description);

    ItemCategory findById(Long id);
}
