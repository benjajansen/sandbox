package com.benja.dao.system;

import com.benja.model.system.SystemPaymentMethod;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemPaymentMethodDao extends CrudRepository<SystemPaymentMethod, Long> {
    SystemPaymentMethod save(SystemPaymentMethod paymentMethod);

    List<SystemPaymentMethod> findAll();

    SystemPaymentMethod findByDescription(String description);

    SystemPaymentMethod findById(Long id);

    void delete(SystemPaymentMethod paymentMethod);

    boolean exists(Long id);
}
