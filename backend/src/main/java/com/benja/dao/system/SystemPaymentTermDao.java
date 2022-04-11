package com.benja.dao.system;

import com.benja.model.system.SystemPaymentTerm;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Repository
public interface SystemPaymentTermDao extends CrudRepository<SystemPaymentTerm, Long> {
    SystemPaymentTerm save(SystemPaymentTerm paymentTerm);

    List<SystemPaymentTerm> findAll();

    SystemPaymentTerm findByDescription(String description);

    SystemPaymentTerm findById(Long id);

    void delete(SystemPaymentTerm paymentTerm);

    boolean exists(Long id);
}
