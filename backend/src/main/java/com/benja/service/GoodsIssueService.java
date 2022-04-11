package com.benja.service;

import com.benja.model.goodsIssue.GoodsIssueDetail;
import com.benja.model.goodsIssue.GoodsIssueHeader;

import java.util.List;

/**
 * Created by Benja on 14/10/2017.
 */
public interface GoodsIssueService {

    GoodsIssueHeader saveGoodsIssueHeader(GoodsIssueHeader goodsIssue);

    List<GoodsIssueHeader> findAllGoodsIssueHeaders();

    GoodsIssueHeader findGoodsIssueHeaderById(Long id);

//GoodsIssueDetail

    GoodsIssueDetail saveGoodsIssueDetail(GoodsIssueDetail goodsIssueDetail);

    GoodsIssueDetail findGoodsIssueDetailById(Long id);

    List<GoodsIssueDetail> findAllGoodsIssueDetails();

    List<GoodsIssueDetail> findAllGoodsIssueDetailByHeaderId(Long id);

    boolean deleteGoodsIssueDetail(GoodsIssueDetail goodsIssueDetail);
}