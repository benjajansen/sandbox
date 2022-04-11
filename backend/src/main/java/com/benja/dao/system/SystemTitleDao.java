package com.benja.dao.system;

import com.benja.model.system.SystemTitle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemTitleDao extends CrudRepository<SystemTitle, Long> {
    SystemTitle save(SystemTitle title);

    List<SystemTitle> findAll();

    SystemTitle findByDescription(String description);

    SystemTitle findById(Long id);

    void delete(SystemTitle title);

    boolean exists(Long id);
}
