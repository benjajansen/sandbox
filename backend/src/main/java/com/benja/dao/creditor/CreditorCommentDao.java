package com.benja.dao.creditor;

import com.benja.model.creditor.Creditor;
import com.benja.model.creditor.CreditorComment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface CreditorCommentDao extends CrudRepository<CreditorComment, Long>{
    CreditorComment save(CreditorComment comment);

    List<CreditorComment> findAll();

    List<CreditorComment> findAllByCreditor(Creditor creditor);

    CreditorComment findById(Long id);
}
