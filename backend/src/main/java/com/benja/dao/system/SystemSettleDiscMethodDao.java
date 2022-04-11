package com.benja.dao.system;

import com.benja.model.system.SystemSettleDiscMethod;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemSettleDiscMethodDao extends CrudRepository<SystemSettleDiscMethod, Long> {
    SystemSettleDiscMethod save(SystemSettleDiscMethod settleDiscMethod);

    List<SystemSettleDiscMethod> findAll();

    SystemSettleDiscMethod findByDescription(String description);

    SystemSettleDiscMethod findById(Long id);

    void delete(SystemSettleDiscMethod settleDiscMethod);

    boolean exists(Long id);
}
