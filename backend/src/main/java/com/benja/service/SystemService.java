package com.benja.service;

import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.system.*;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
public interface SystemService {
    SystemPaymentMethod savePaymentMethod(SystemPaymentMethod paymentMethod);

    List<SystemPaymentMethod> findAllPaymentMethods();

    List<ShortDataPackage> findAllPaymentMethodsShort();

    SystemPaymentMethod findPaymentMethodByDescription(String description);

    SystemPaymentMethod findPaymentMethodById(Long id);

    boolean deletePaymentMethod(SystemPaymentMethod paymentMethod);
    
//PaymentTerm
    SystemPaymentTerm savePaymentTerm(SystemPaymentTerm paymentTerm);

    List<SystemPaymentTerm> findAllPaymentTerms();

    List<ShortDataPackage> findAllPaymentTermsShort();

    SystemPaymentTerm findPaymentTermByDescription(String description);

    SystemPaymentTerm findPaymentTermById(Long id);

    boolean deletePaymentTerm(SystemPaymentTerm paymentTerm);
    
//PaymentType
    SystemPaymentType savePaymentType(SystemPaymentType paymentType);

    List<SystemPaymentType> findAllPaymentTypes();

    List<ShortDataPackage> findAllPaymentTypesShort();

    SystemPaymentType findPaymentTypeByDescription(String description);

    SystemPaymentType findPaymentTypeById(Long id);
    
    boolean deletePaymentType(SystemPaymentType paymentType);

//Title
    SystemTitle saveTitle(SystemTitle title);

    List<SystemTitle> findAllTitles();

    List<ShortDataPackage> findAllTitlesShort();

    SystemTitle findTitleByDescription(String description);

    SystemTitle findTitleById(Long id);

    boolean deleteTitle(SystemTitle title);

//BEELevel
    SystemBEELevel saveBEELevel(SystemBEELevel beeLevel);

    List<SystemBEELevel> findAllBEELevels();

    List<ShortDataPackage> findAllBEELevelsShort();

    SystemBEELevel findBEELevelByDescription(String description);

    SystemBEELevel findBEELevelById(Long id);

    boolean deleteBEELevel(SystemBEELevel beeLevel);

//BEEType
    SystemBEEType saveBEEType(SystemBEEType beeType);

    List<SystemBEEType> findAllBEETypes();

    List<ShortDataPackage> findAllBEETypesShort();

    SystemBEEType findBEETypeByDescription(String description);

    SystemBEEType findBEETypeById(Long id);

    boolean deleteBEEType(SystemBEEType beeType);

//SettleDiscMethod
    SystemSettleDiscMethod saveSettleDiscMethod(SystemSettleDiscMethod settleDiscMethod);

    List<SystemSettleDiscMethod> findAllSettleDiscMethods();

    List<ShortDataPackage> findAllSettleDiscMethodsShort();

    SystemSettleDiscMethod findSettleDiscMethodByDescription(String description);

    SystemSettleDiscMethod findSettleDiscMethodById(Long id);

    boolean deleteSettleDiscMethod(SystemSettleDiscMethod settleDiscMethod);

//TradeLevel
    SystemTradeLevel saveTradeLevel(SystemTradeLevel tradeLevel);

    List<SystemTradeLevel> findAllTradeLevels();

    List<ShortDataPackage> findAllTradeLevelsShort();

    SystemTradeLevel findTradeLevelByDescription(String description);

    SystemTradeLevel findTradeLevelById(Long id);

    boolean deleteTradeLevel(SystemTradeLevel tradeLevel);

//PickMethod
    SystemPickMethod savePickMethod(SystemPickMethod pickMethod);

    List<SystemPickMethod> findAllPickMethods();

    List<ShortDataPackage> findAllPickMethodsShort();

    SystemPickMethod findPickMethodByName(String name);

    SystemPickMethod findPickMethodById(Long id);

    boolean deletePickMethod(SystemPickMethod pickMethod);
}
