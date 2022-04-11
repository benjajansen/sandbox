package com.benja.service;

import com.benja.model.goodsReceive.GoodsReceiveDetail;
import com.benja.model.goodsReceive.GoodsReceiveHeader;

import java.util.List;

/**
 * Created by Benja on 14/10/2017.
 */
public interface GoodsReceiveService {

    GoodsReceiveHeader saveGoodsReceiveHeader(GoodsReceiveHeader goodsReceive);

    List<GoodsReceiveHeader> findAllGoodsReceiveHeaders();

    GoodsReceiveHeader findGoodsReceiveHeaderById(Long id);

//GoodsReceiveDetail

    GoodsReceiveDetail saveGoodsReceiveDetail(GoodsReceiveDetail goodsReceiveDetail);

    GoodsReceiveDetail findGoodsReceiveDetailById(Long id);

    List<GoodsReceiveDetail> findAllGoodsReceiveDetails();

    List<GoodsReceiveDetail> findAllGoodsReceiveDetailByHeaderId(Long id);

    boolean deleteGoodsReceiveDetail(GoodsReceiveDetail goodsReceiveDetail);
}