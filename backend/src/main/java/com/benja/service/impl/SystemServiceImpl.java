package com.benja.service.impl;

import com.benja.dao.system.*;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.system.*;
import com.benja.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Service
public class SystemServiceImpl implements SystemService{

    @Autowired
    private SystemPaymentMethodDao paymentMethodDao;

    @Autowired
    private SystemPaymentTermDao paymentTermDao;

    @Autowired
    private SystemPaymentTypeDao paymentTypeDao;

    @Autowired
    private SystemTitleDao titleDao;

    @Autowired
    private SystemBEELevelDao beeLevelDao;

    @Autowired
    private SystemBEETypeDao beeTypeDao;

    @Autowired
    private SystemSettleDiscMethodDao settleDiscMethodDao;

    @Autowired
    private SystemTradeLevelDao tradeLevelDao;
    
    @Autowired
    private SystemPickMethodDao pickMethodDao;
    
    @Override
    public SystemPaymentMethod savePaymentMethod(SystemPaymentMethod paymentMethod) {
        return paymentMethodDao.save(paymentMethod);
    }

    @Override
    public List<SystemPaymentMethod> findAllPaymentMethods() {
        return paymentMethodDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllPaymentMethodsShort() {
        List<SystemPaymentMethod> paymentMethod;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        paymentMethod = paymentMethodDao.findAll();

        for (SystemPaymentMethod payM : paymentMethod) {
            ShortDataPackage.setId(payM.getId());
            ShortDataPackage.setValue(payM.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemPaymentMethod findPaymentMethodByDescription(String description) {
        SystemPaymentMethod paymentMethod = new SystemPaymentMethod();

        if(description != null && !description.isEmpty())
            paymentMethod = paymentMethodDao.findByDescription(description);

        return paymentMethod;
    }

    @Override
    public SystemPaymentMethod findPaymentMethodById(Long id) {
        return paymentMethodDao.findById(id);
    }

    @Override
    public boolean deletePaymentMethod(SystemPaymentMethod paymentMethod) {
        paymentMethodDao.delete(paymentMethod);
        return paymentMethodDao.exists(paymentMethod.getId());
    }
    
//PaymentTerm

    @Override
    public SystemPaymentTerm savePaymentTerm(SystemPaymentTerm paymentTerm) {
    return paymentTermDao.save(paymentTerm);
}

    @Override
    public List<SystemPaymentTerm> findAllPaymentTerms() {
        return paymentTermDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllPaymentTermsShort() {
        List<SystemPaymentTerm> paymentTerm;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        paymentTerm = paymentTermDao.findAll();

        for (SystemPaymentTerm payTerm : paymentTerm) {
            ShortDataPackage.setId(payTerm.getId());
            ShortDataPackage.setValue(payTerm.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemPaymentTerm findPaymentTermByDescription(String description) {
        SystemPaymentTerm paymentTerm = new SystemPaymentTerm();

        if(description != null && !description.isEmpty())
            paymentTerm = paymentTermDao.findByDescription(description);

        return paymentTerm;
    }

    @Override
    public SystemPaymentTerm findPaymentTermById(Long id) {
        return paymentTermDao.findById(id);
    }

    @Override
    public boolean deletePaymentTerm(SystemPaymentTerm paymentTerm) {
        paymentTermDao.delete(paymentTerm);
        return paymentTermDao.exists(paymentTerm.getId());
    }

//PaymentType

    @Override
    public SystemPaymentType savePaymentType(SystemPaymentType paymentType) {
        return paymentTypeDao.save(paymentType);
    }

    @Override
    public List<SystemPaymentType> findAllPaymentTypes() {
        return paymentTypeDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllPaymentTypesShort() {
        List<SystemPaymentType> paymentType;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        paymentType = paymentTypeDao.findAll();

        for (SystemPaymentType payType : paymentType) {
            ShortDataPackage.setId(payType.getId());
            ShortDataPackage.setValue(payType.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemPaymentType findPaymentTypeByDescription(String description) {
        SystemPaymentType paymentType = new SystemPaymentType();

        if(description != null && !description.isEmpty())
            paymentType = paymentTypeDao.findByDescription(description);

        return paymentType;
    }

    @Override
    public SystemPaymentType findPaymentTypeById(Long id) {
        return paymentTypeDao.findById(id);
    }

    @Override
    public boolean deletePaymentType(SystemPaymentType paymentType) {
        paymentTypeDao.delete(paymentType);
        return paymentTypeDao.exists(paymentType.getId());
    }

//Title

    @Override
    public SystemTitle saveTitle(SystemTitle title) {
        return titleDao.save(title);
    }

    @Override
    public List<SystemTitle> findAllTitles() {
        return titleDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllTitlesShort() {
        List<SystemTitle> title;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        title = titleDao.findAll();

        for (SystemTitle tle : title) {
            ShortDataPackage.setId(tle.getId());
            ShortDataPackage.setValue(tle.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemTitle findTitleByDescription(String description) {
        SystemTitle title = new SystemTitle();

        if(description != null && !description.isEmpty())
            title = titleDao.findByDescription(description);

        return title;
    }

    @Override
    public SystemTitle findTitleById(Long id) {
        return titleDao.findById(id);
    }

    @Override
    public boolean deleteTitle(SystemTitle title) {
        titleDao.delete(title);
        return titleDao.exists(title.getId());
    }

//BEELevel

    @Override
    public SystemBEELevel saveBEELevel(SystemBEELevel beeLevel) {
        return beeLevelDao.save(beeLevel);
    }

    @Override
    public List<SystemBEELevel> findAllBEELevels() {
        return beeLevelDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllBEELevelsShort() {
        List<SystemBEELevel> beeLevels;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        beeLevels = beeLevelDao.findAll();

        for (SystemBEELevel beeL : beeLevels) {
            ShortDataPackage.setId(beeL.getId());
            ShortDataPackage.setValue(beeL.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemBEELevel findBEELevelByDescription(String description) {
        SystemBEELevel beeLevel = new SystemBEELevel();

        if(description != null && !description.isEmpty())
            beeLevel = beeLevelDao.findByDescription(description);

        return beeLevel;
    }

    @Override
    public SystemBEELevel findBEELevelById(Long id) {
        return beeLevelDao.findById(id);
    }

    @Override
    public boolean deleteBEELevel(SystemBEELevel beeLevel) {
        beeLevelDao.delete(beeLevel);
        return beeLevelDao.exists(beeLevel.getId());
    }

//BEEType

    @Override
    public SystemBEEType saveBEEType(SystemBEEType beeType) {
        return beeTypeDao.save(beeType);
    }

    @Override
    public List<SystemBEEType> findAllBEETypes() {
        return beeTypeDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllBEETypesShort() {
        List<SystemBEEType> beeTypes;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        beeTypes = beeTypeDao.findAll();

        for (SystemBEEType beeT : beeTypes) {
            ShortDataPackage.setId(beeT.getId());
            ShortDataPackage.setValue(beeT.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemBEEType findBEETypeByDescription(String description) {
        SystemBEEType beeType = new SystemBEEType();

        if(description != null && !description.isEmpty())
            beeType = beeTypeDao.findByDescription(description);

        return beeType;
    }

    @Override
    public SystemBEEType findBEETypeById(Long id) {
        return beeTypeDao.findById(id);
    }

    @Override
    public boolean deleteBEEType(SystemBEEType beeType) {
        beeTypeDao.delete(beeType);
        return beeTypeDao.exists(beeType.getId());
    }

//SettleDiscMethod

    @Override
    public SystemSettleDiscMethod saveSettleDiscMethod(SystemSettleDiscMethod settleDiscMethod) {
        return settleDiscMethodDao.save(settleDiscMethod);
    }

    @Override
    public List<SystemSettleDiscMethod> findAllSettleDiscMethods() {
        return settleDiscMethodDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllSettleDiscMethodsShort() {
        List<SystemSettleDiscMethod> settleDiscMethods;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        settleDiscMethods = settleDiscMethodDao.findAll();

        for (SystemSettleDiscMethod setMeth : settleDiscMethods) {
            ShortDataPackage.setId(setMeth.getId());
            ShortDataPackage.setValue(setMeth.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemSettleDiscMethod findSettleDiscMethodByDescription(String description) {
        SystemSettleDiscMethod settleDiscMethod = new SystemSettleDiscMethod();

        if(description != null && !description.isEmpty())
            settleDiscMethod = settleDiscMethodDao.findByDescription(description);

        return settleDiscMethod;
    }

    @Override
    public SystemSettleDiscMethod findSettleDiscMethodById(Long id) {
        return settleDiscMethodDao.findById(id);
    }

    @Override
    public boolean deleteSettleDiscMethod(SystemSettleDiscMethod settleDiscMethod) {
        settleDiscMethodDao.delete(settleDiscMethod);
        return settleDiscMethodDao.exists(settleDiscMethod.getId());
    }

//TradeLevel

    @Override
    public SystemTradeLevel saveTradeLevel(SystemTradeLevel tradeLevel) {
        return tradeLevelDao.save(tradeLevel);
    }

    @Override
    public List<SystemTradeLevel> findAllTradeLevels() {
        return tradeLevelDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllTradeLevelsShort() {
        List<SystemTradeLevel> tradeLevels;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        tradeLevels = tradeLevelDao.findAll();

        for (SystemTradeLevel tradeL : tradeLevels) {
            ShortDataPackage.setId(tradeL.getId());
            ShortDataPackage.setValue(tradeL.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemTradeLevel findTradeLevelByDescription(String description) {
        SystemTradeLevel tradeLevel = new SystemTradeLevel();

        if(description != null && !description.isEmpty())
            tradeLevel = tradeLevelDao.findByDescription(description);

        return tradeLevel;
    }

    @Override
    public SystemTradeLevel findTradeLevelById(Long id) {
        return tradeLevelDao.findById(id);
    }

    @Override
    public boolean deleteTradeLevel(SystemTradeLevel tradeLevel) {
        tradeLevelDao.delete(tradeLevel);
        return tradeLevelDao.exists(tradeLevel.getId());
    }

//PickMethod

    @Override
    public SystemPickMethod savePickMethod(SystemPickMethod pickMethod) {
        return pickMethodDao.save(pickMethod);
    }

    @Override
    public List<SystemPickMethod> findAllPickMethods() {
        return pickMethodDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllPickMethodsShort() {
        List<SystemPickMethod> pickMethod;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        pickMethod = pickMethodDao.findAll();

        for (SystemPickMethod payType : pickMethod) {
            ShortDataPackage.setId(payType.getId());
            ShortDataPackage.setValue(payType.getName());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public SystemPickMethod findPickMethodByName(String name) {
        SystemPickMethod pickMethod = new SystemPickMethod();

        if(name != null && !name.isEmpty())
            pickMethod = pickMethodDao.findByName(name);

        return pickMethod;
    }

    @Override
    public SystemPickMethod findPickMethodById(Long id) {
        return pickMethodDao.findById(id);
    }

    @Override
    public boolean deletePickMethod(SystemPickMethod pickMethod) {
        pickMethodDao.delete(pickMethod);
        return pickMethodDao.exists(pickMethod.getId());
    }    
}
