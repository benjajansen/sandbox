package com.benja.dao.goodsIssue;

import com.benja.model.goodsIssue.GoodsIssueDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface GoodsIssueDetailDao extends CrudRepository<GoodsIssueDetail, Long>{

    GoodsIssueDetail save(GoodsIssueDetail goodsIssueDetail);

    List<GoodsIssueDetail> findAll();

    List<GoodsIssueDetail> findByGoodsIssueHeader_id(Long id);

    GoodsIssueDetail findById(Long id);

    void delete(GoodsIssueDetail goodsIssueDetail);

    boolean exists(Long id);
}
