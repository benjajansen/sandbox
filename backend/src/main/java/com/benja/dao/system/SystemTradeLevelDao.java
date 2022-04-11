package com.benja.dao.system;

import com.benja.model.system.SystemTradeLevel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemTradeLevelDao extends CrudRepository<SystemTradeLevel, Long> {
    SystemTradeLevel save(SystemTradeLevel tradeLevel);

    List<SystemTradeLevel> findAll();

    SystemTradeLevel findByDescription(String description);

    SystemTradeLevel findById(Long id);

    void delete(SystemTradeLevel tradeLevel);

    boolean exists(Long id);
}
