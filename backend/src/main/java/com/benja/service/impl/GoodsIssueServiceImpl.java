package com.benja.service.impl;

import com.benja.dao.goodsIssue.GoodsIssueHeaderDao;
import com.benja.dao.goodsIssue.GoodsIssueDetailDao;
import com.benja.model.goodsIssue.GoodsIssueHeader;
import com.benja.model.goodsIssue.GoodsIssueDetail;
import com.benja.service.GoodsIssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@Service
public class GoodsIssueServiceImpl implements GoodsIssueService {

    @Autowired
    private GoodsIssueHeaderDao goodsIssueHeaderDao;

    @Autowired
    private GoodsIssueDetailDao goodsIssueDetailDao;

    @Override
    public GoodsIssueHeader saveGoodsIssueHeader(GoodsIssueHeader goodsIssue) {
        GoodsIssueHeader gi = goodsIssue;

        return goodsIssueHeaderDao.save(gi);
    }

    @Override
    public List<GoodsIssueHeader> findAllGoodsIssueHeaders() {
        return goodsIssueHeaderDao.findAll();
    }

    @Override
    public GoodsIssueHeader findGoodsIssueHeaderById(Long id) {
        GoodsIssueHeader gi = goodsIssueHeaderDao.findById(id);

        return gi;
    }

//Goods Issue Detail
    @Override
    public GoodsIssueDetail saveGoodsIssueDetail(GoodsIssueDetail goodsIssueDetail) {
        GoodsIssueDetail gid = goodsIssueDetail;
        return goodsIssueDetailDao.save(gid);
    }

    @Override
    public List<GoodsIssueDetail> findAllGoodsIssueDetails() {
        return goodsIssueDetailDao.findAll();
    }

    @Override
    public GoodsIssueDetail findGoodsIssueDetailById(Long id) {
        return goodsIssueDetailDao.findById(id);
    }

    @Override
    public List<GoodsIssueDetail> findAllGoodsIssueDetailByHeaderId(Long id) {
        return goodsIssueDetailDao.findByGoodsIssueHeader_id(id);
    }

    @Override
    public boolean deleteGoodsIssueDetail(GoodsIssueDetail goodsIssueDetail) {
        goodsIssueDetailDao.delete(goodsIssueDetail);
        return true;
    }
}
