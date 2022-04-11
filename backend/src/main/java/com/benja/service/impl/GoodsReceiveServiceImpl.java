package com.benja.service.impl;

import com.benja.dao.goodsReceive.GoodsReceiveDetailDao;
import com.benja.dao.goodsReceive.GoodsReceiveHeaderDao;
import com.benja.model.goodsReceive.GoodsReceiveDetail;
import com.benja.model.goodsReceive.GoodsReceiveHeader;
import com.benja.service.GoodsReceiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@Service
public class GoodsReceiveServiceImpl implements GoodsReceiveService {

    @Autowired
    private GoodsReceiveHeaderDao goodsReceiveHeaderDao;

    @Autowired
    private GoodsReceiveDetailDao goodsReceiveDetailDao;

    @Override
    public GoodsReceiveHeader saveGoodsReceiveHeader(GoodsReceiveHeader goodsReceive) {
        GoodsReceiveHeader gi = goodsReceive;

        return goodsReceiveHeaderDao.save(gi);
    }

    @Override
    public List<GoodsReceiveHeader> findAllGoodsReceiveHeaders() {
        return goodsReceiveHeaderDao.findAll();
    }

    @Override
    public GoodsReceiveHeader findGoodsReceiveHeaderById(Long id) {
        GoodsReceiveHeader gi = goodsReceiveHeaderDao.findById(id);

        return gi;
    }

//Goods Receive Detail
    @Override
    public GoodsReceiveDetail saveGoodsReceiveDetail(GoodsReceiveDetail goodsReceiveDetail) {
        GoodsReceiveDetail gid = goodsReceiveDetail;
        return goodsReceiveDetailDao.save(gid);
    }

    @Override
    public List<GoodsReceiveDetail> findAllGoodsReceiveDetails() {
        return goodsReceiveDetailDao.findAll();
    }

    @Override
    public GoodsReceiveDetail findGoodsReceiveDetailById(Long id) {
        return goodsReceiveDetailDao.findById(id);
    }

    @Override
    public List<GoodsReceiveDetail> findAllGoodsReceiveDetailByHeaderId(Long id) {
        return goodsReceiveDetailDao.findByGoodsReceiveHeader_id(id);
    }

    @Override
    public boolean deleteGoodsReceiveDetail(GoodsReceiveDetail goodsReceiveDetail) {
        goodsReceiveDetailDao.delete(goodsReceiveDetail);
        return true;
    }
}
