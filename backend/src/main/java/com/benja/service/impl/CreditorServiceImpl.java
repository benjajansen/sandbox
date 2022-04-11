package com.benja.service.impl;

import com.benja.dao.creditor.*;

import com.benja.model.dataPackage.DebtCredAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.creditor.*;
import com.benja.service.CreditorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@Service
public class CreditorServiceImpl implements CreditorService {

    @Autowired
    private CreditorDao creditorDao;

    @Autowired
    private CreditorClassificationDao classificationDao;

    @Autowired
    private CreditorCommentDao commentDao;

    @Autowired
    private CreditorGroupDao groupDao;

    @Autowired
    private CreditorParameterDao parameterDao;

    @Override
    public Creditor saveCreditor(Creditor creditor) {
        Creditor cred = creditor;
        return creditorDao.save(cred);
    }

    @Override
    public List<Creditor> findAllCreditors() {
        return creditorDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllCreditorsShort() {
        List<Creditor> creditors;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        creditors = creditorDao.findAll();

        for (Creditor credit : creditors) {
            ShortDataPackage.setId(credit.getId());
            ShortDataPackage.setValue(credit.getAccNo());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<DebtCredAutoComp> findAllCreditorsAuto() {
        List<Creditor> creditors;
        List<DebtCredAutoComp> lstDebtCredAutoComp = new ArrayList<DebtCredAutoComp>();
        DebtCredAutoComp credAutoComp = new DebtCredAutoComp();

        creditors = creditorDao.findAll();

        for (Creditor credit : creditors) {
            credAutoComp.setId(credit.getId());
            credAutoComp.setAccNo(credit.getAccNo());
            credAutoComp.setRegName(credit.getRegName());
            credAutoComp.setTradeName(credit.getTradeName());
            lstDebtCredAutoComp.add(credAutoComp);
            credAutoComp = new DebtCredAutoComp();
        }

        return lstDebtCredAutoComp;
    }
    
    @Override
    public Creditor findCreditorByAccNo(String accNo) {
        Creditor cred = new Creditor();

        if(accNo != null && !accNo.isEmpty())
            cred = creditorDao.findByAccNo(accNo);

        return cred;
    }

    @Override
    public Creditor findCreditorById(Long id) {
        Creditor cred = new Creditor();

        cred = creditorDao.findById(id);

        return cred;
    }

//Classification
    @Override
    public CreditorClassification saveClassification(CreditorClassification classification) {
        return classificationDao.save(classification);
    }

    @Override
    public List<CreditorClassification> findAllClassifications() {
        return classificationDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllClassificationsShort() {
        List<CreditorClassification> classifications;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        classifications = classificationDao.findAll();

        for (CreditorClassification clas : classifications) {
            ShortDataPackage.setId(clas.getId());
            ShortDataPackage.setValue(clas.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public CreditorClassification findClassificationByDescription(String description) {
        CreditorClassification classification = new CreditorClassification();

        if(description != null && !description.isEmpty())
            classification = classificationDao.findByDescription(description);

        return classification;
    }

    @Override
    public CreditorClassification findClassificationById(Long id) {
        return classificationDao.findById(id);
    }

    @Override
    public boolean deleteClassification(CreditorClassification classification) {
        classificationDao.delete(classification);
        return classificationDao.exists(classification.getId());
    }

    //Comment
    @Override
    public CreditorComment saveComment(CreditorComment comment){
        return commentDao.save(comment);
    }

    @Override
    public List<CreditorComment> findAllComments() {
        return commentDao.findAll();
    }

    @Override
    public List<CreditorComment> findAllCommentsByCreditorId(Long creditorId) {
        Creditor creditor = creditorDao.findById(creditorId);
        return commentDao.findAllByCreditor(creditor);
    }

    @Override
    public List<CreditorComment> findAllCommentsByCreditorAccNo(String creditAccNo) {
        Creditor creditor = creditorDao.findByAccNo(creditAccNo);
        return commentDao.findAllByCreditor(creditor);
    }

    @Override
    public CreditorComment findCommentById(Long id){
        return commentDao.findById(id);
    }

//Parameter
    @Override
    public CreditorParameter saveParameter(CreditorParameter parameter) {
        return parameterDao.save(parameter);
    }

    @Override
    public List<CreditorParameter> findAllParameters() {
        return parameterDao.findAll();
    }

    @Override
    public CreditorParameter findParameterById(Long id) {
        return parameterDao.findById(id);
    }

    //Group
    @Override
    public CreditorGroup saveGroup(CreditorGroup group) {
        return groupDao.save(group);
    }

    @Override
    public List<CreditorGroup> findAllGroups() {
        return groupDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllGroupsShort() {
        List<CreditorGroup> groups;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        groups = groupDao.findAll();

        for (CreditorGroup grp : groups) {
            ShortDataPackage.setId(grp.getId());
            ShortDataPackage.setValue(grp.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public CreditorGroup findGroupByDescription(String description) {
        CreditorGroup group = new CreditorGroup();

        if(description != null && !description.isEmpty())
            group = groupDao.findByDescription(description);

        return group;
    }

    @Override
    public CreditorGroup findGroupById(Long id) {
        return groupDao.findById(id);
    }

    @Override
    public boolean deleteGroup(CreditorGroup group) {
        groupDao.delete(group);
        return groupDao.exists(group.getId());
    }
}
