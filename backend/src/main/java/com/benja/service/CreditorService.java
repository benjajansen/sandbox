package com.benja.service;

import com.benja.model.dataPackage.DebtCredAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.creditor.*;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
public interface CreditorService {

    Creditor saveCreditor(Creditor creditor);

    List<Creditor> findAllCreditors();

    List<ShortDataPackage> findAllCreditorsShort();

    List<DebtCredAutoComp> findAllCreditorsAuto();

    Creditor findCreditorByAccNo(String accNo);

    Creditor findCreditorById(Long id);

//Classification
    CreditorClassification saveClassification(CreditorClassification classification);

    List<CreditorClassification> findAllClassifications();

    List<ShortDataPackage> findAllClassificationsShort();

    CreditorClassification findClassificationByDescription(String description);

    CreditorClassification findClassificationById(Long id);

    boolean deleteClassification(CreditorClassification classification);

//Comment
    CreditorComment saveComment(CreditorComment comment);

    List<CreditorComment> findAllComments();

    List<CreditorComment> findAllCommentsByCreditorId(Long creditorId);

    List<CreditorComment> findAllCommentsByCreditorAccNo(String creditAccNo);

    CreditorComment findCommentById(Long id);

//Parameter
    CreditorParameter saveParameter(CreditorParameter parameter);

    List<CreditorParameter> findAllParameters();

    CreditorParameter findParameterById(Long id);

//Group
    CreditorGroup saveGroup(CreditorGroup group);

    List<CreditorGroup> findAllGroups();

    List<ShortDataPackage> findAllGroupsShort();

    CreditorGroup findGroupByDescription(String description);

    CreditorGroup findGroupById(Long id);

    boolean deleteGroup(CreditorGroup group);
}