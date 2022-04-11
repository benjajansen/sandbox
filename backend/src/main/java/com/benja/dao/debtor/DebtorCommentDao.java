package com.benja.dao.debtor;

import com.benja.model.debtor.DebtorComment;
import com.benja.model.debtor.Debtor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ben on 23 Jul 2017.
 */
@Repository
public interface DebtorCommentDao extends CrudRepository<DebtorComment, Long>{
    DebtorComment save(DebtorComment comment);

    List<DebtorComment> findAll();

    List<DebtorComment> findAllByDebtor(Debtor debtor);

    DebtorComment findById(Long id);
}
