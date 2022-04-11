package com.benja.dao.goodsReceive;

import com.benja.model.goodsReceive.GoodsReceiveHeader;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface GoodsReceiveHeaderDao extends CrudRepository<GoodsReceiveHeader, Long>{

    GoodsReceiveHeader save(GoodsReceiveHeader goodsReceive);

    List<GoodsReceiveHeader> findAll();

    GoodsReceiveHeader findById(Long id);
}
