package com.benja.dao.item;

import com.benja.model.item.ItemUnitOfMeasure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface ItemUnitOfMeasureDao extends CrudRepository<ItemUnitOfMeasure, Long>{

    ItemUnitOfMeasure save(ItemUnitOfMeasure unitOfMeasure);

    List<ItemUnitOfMeasure> findAll();

    ItemUnitOfMeasure findByDescription(String description);

    ItemUnitOfMeasure findById(Long id);
}
