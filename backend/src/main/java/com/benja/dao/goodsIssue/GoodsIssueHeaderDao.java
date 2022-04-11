package com.benja.dao.goodsIssue;

import com.benja.model.goodsIssue.GoodsIssueHeader;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Repository
public interface GoodsIssueHeaderDao extends CrudRepository<GoodsIssueHeader, Long>{

    GoodsIssueHeader save(GoodsIssueHeader goodsIssue);

    List<GoodsIssueHeader> findAll();

    GoodsIssueHeader findById(Long id);
}
