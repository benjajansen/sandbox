package com.benja.dao.system;

import com.benja.model.system.SystemPaymentType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemPaymentTypeDao extends CrudRepository<SystemPaymentType, Long> {
    SystemPaymentType save(SystemPaymentType paymentType);

    List<SystemPaymentType> findAll();

    SystemPaymentType findByDescription(String description);

    SystemPaymentType findById(Long id);

    void delete(SystemPaymentType paymentType);

    boolean exists(Long id);
}
