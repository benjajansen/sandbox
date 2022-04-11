package com.benja.dao.item;


import com.benja.model.item.ItemGroup;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface ItemGroupDao extends CrudRepository<ItemGroup, Long>{

    ItemGroup save(ItemGroup group);

    List<ItemGroup> findAll();

    ItemGroup findByDescription(String description);

    ItemGroup findById(Long id);
}
