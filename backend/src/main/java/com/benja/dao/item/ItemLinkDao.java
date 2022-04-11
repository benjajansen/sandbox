package com.benja.dao.item;

import com.benja.model.debtor.Debtor;
import com.benja.model.item.ItemLink;
import com.benja.model.item.ItemMaster;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface ItemLinkDao extends CrudRepository<ItemLink, Long>{

    ItemLink save(ItemLink itemLink);

    List<ItemLink> findAll();

    List<ItemLink> findByDebtor_id(Long debtorId);

    List<ItemLink> findByItem_code(String itemCode);

    List<ItemLink> findByDebtor_idAndItem_code(Long debtorId, String itemCode);

    ItemLink findById(Long id);
}
