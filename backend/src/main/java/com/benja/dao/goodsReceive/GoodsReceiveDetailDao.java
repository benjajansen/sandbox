package com.benja.dao.goodsReceive;

import com.benja.model.goodsReceive.GoodsReceiveDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface GoodsReceiveDetailDao extends CrudRepository<GoodsReceiveDetail, Long>{

    GoodsReceiveDetail save(GoodsReceiveDetail goodsReceiveDetail);

    List<GoodsReceiveDetail> findAll();

    List<GoodsReceiveDetail> findByGoodsReceiveHeader_id(Long giNo);

    GoodsReceiveDetail findById(Long id);

    void delete(GoodsReceiveDetail goodsReceiveDetail);

    boolean exists(Long id);
}
