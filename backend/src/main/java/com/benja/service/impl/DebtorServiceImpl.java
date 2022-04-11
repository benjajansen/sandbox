package com.benja.service.impl;

import com.benja.dao.debtor.*;
import com.benja.model.debtor.DebtorCostCentreAutoComp;
import com.benja.model.dataPackage.DebtCredAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.debtor.*;
import com.benja.service.DebtorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
@Service
public class DebtorServiceImpl implements DebtorService {

    @Autowired
    private DebtorDao debtorDao;

    @Autowired
    private DebtorBusinessTypeDao businessTypeDao;

    @Autowired
    private DebtorBusinessUnitDao businessUnitDao;

    @Autowired
    private DebtorCategoryDao categoryDao;

    @Autowired
    private DebtorCommentDao commentDao;

    @Autowired
    private DebtorParameterDao parameterDao;

    @Autowired
    private DebtorTypeOfOrganisationDao typeOfOrganisationDao;

    @Autowired
    private DebtorCostCentreDao debtorCostCentreDao;

    @Override
    public Debtor saveDebtor(Debtor debtor) {
        return debtorDao.save(debtor);
    }

    @Override
    public List<Debtor> findAllDebtors() {
        return debtorDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllDebtorsShort() {
        List<Debtor> debtors;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        debtors = debtorDao.findAll();

        for (Debtor debt : debtors) {
            ShortDataPackage.setId(debt.getId());
            ShortDataPackage.setValue(debt.getAccNo());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<ShortDataPackage> findAllDebtorsShortTradingName() {
        List<Debtor> debtors;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        debtors = debtorDao.findAll();

        for (Debtor debt : debtors) {
            ShortDataPackage.setId(debt.getId());
            ShortDataPackage.setValue(debt.getTradeName());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<DebtCredAutoComp> findAllDebtorsAuto() {
        List<Debtor> debtors;
        List<DebtCredAutoComp> lstDebtCredAutoComp = new ArrayList<DebtCredAutoComp>();
        DebtCredAutoComp debtAutoComp = new DebtCredAutoComp();

        debtors = debtorDao.findAll();

        for (Debtor debt : debtors) {
            debtAutoComp.setId(debt.getId());
            debtAutoComp.setAccNo(debt.getAccNo());
            debtAutoComp.setRegName(debt.getRegName());
            debtAutoComp.setTradeName(debt.getTradeName());
            lstDebtCredAutoComp.add(debtAutoComp);
            debtAutoComp = new DebtCredAutoComp();
        }

        return lstDebtCredAutoComp;
    }
    
    @Override
    public Debtor findDebtorByAccNo(String accNo) {
        return debtorDao.findByAccNo(accNo);
    }

    @Override
    public Debtor findDebtorById(Long id) {
        return debtorDao.findById(id);
    }

//BusinessType    
    
    @Override
    public DebtorBusinessType saveBusinessType(DebtorBusinessType businessType) {
        return businessTypeDao.save(businessType);
    }

    @Override
    public List<DebtorBusinessType> findAllBusinessTypes() {
        return businessTypeDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllBusinessTypesShort() {
        List<DebtorBusinessType> businessType;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();
        
        businessType = businessTypeDao.findAll();

        for (DebtorBusinessType bType : businessType) {
            ShortDataPackage.setId(bType.getId());
            ShortDataPackage.setValue(bType.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public DebtorBusinessType findBusinessTypeByDescription(String description) {
        return businessTypeDao.findByDescription(description);
    }

    @Override
    public DebtorBusinessType findBusinessTypeById(Long id) {
        return businessTypeDao.findById(id);
    }

    @Override
    public boolean deleteBusinessType(DebtorBusinessType businessType) {
        businessTypeDao.delete(businessType);
        return businessTypeDao.exists(businessType.getId());
    }

//Business Unit    
    
    @Override
    public DebtorBusinessUnit saveBusinessUnit(DebtorBusinessUnit businessUnit) {
        return businessUnitDao.save(businessUnit);
    }

    @Override
    public List<DebtorBusinessUnit> findAllBusinessUnits() {
        return businessUnitDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllBusinessUnitsShort() {
        List<DebtorBusinessUnit> businessUnit;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        businessUnit = businessUnitDao.findAll();

        for (DebtorBusinessUnit bUnit : businessUnit) {
            ShortDataPackage.setId(bUnit.getId());
            ShortDataPackage.setValue(bUnit.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public DebtorBusinessUnit findBusinessUnitByDescription(String description) {
        return businessUnitDao.findByDescription(description);
    }

    @Override
    public DebtorBusinessUnit findBusinessUnitById(Long id) {
        return businessUnitDao.findById(id);
    }

    @Override
    public boolean deleteBusinessUnit(DebtorBusinessUnit businessUnit) {
        businessUnitDao.delete(businessUnit);
        return businessUnitDao.exists(businessUnit.getId());
    }

//Category

    @Override
    public DebtorCategory saveCategory(DebtorCategory category) {
        return categoryDao.save(category);
    }

    @Override
    public List<DebtorCategory> findAllCategorys() {
        return categoryDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllCategorysShort() {
        List<DebtorCategory> category;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        category = categoryDao.findAll();

        for (DebtorCategory cate : category) {
            ShortDataPackage.setId(cate.getId());
            ShortDataPackage.setValue(cate.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public DebtorCategory findCategoryByDescription(String description) {
        return categoryDao.findByDescription(description);
    }

    @Override
    public DebtorCategory findCategoryById(Long id) {
        return categoryDao.findById(id);
    }

    @Override
    public boolean deleteCategory(DebtorCategory category) {
        categoryDao.delete(category);
        return categoryDao.exists(category.getId());
    }

//Comments
    @Override
    public DebtorComment saveComment(DebtorComment comment) {
        return commentDao.save(comment);
    }

    @Override
    public List<DebtorComment> findAllComments() {
        return commentDao.findAll();
    }

    @Override
    public List<DebtorComment> findAllCommentsByDebtorId(Long debtorId) {
        Debtor debtor = debtorDao.findById(debtorId);
        return commentDao.findAllByDebtor(debtor);
    }

    @Override
    public List<DebtorComment> findAllCommentsByDebtorAccNo(String debtAccNo) {
        Debtor debtor = debtorDao.findByAccNo(debtAccNo);
        return commentDao.findAllByDebtor(debtor);
    }

    @Override
    public DebtorComment findCommentById(Long id) {
        return commentDao.findById(id);
    }

//Parameters
    @Override
    public DebtorParameter saveParameter(DebtorParameter parameter) {
        return parameterDao.save(parameter);
    }

    @Override
    public List<DebtorParameter> findAllParameters() {
        return parameterDao.findAll();
    }

    @Override
    public DebtorParameter findParameterById(Long id) {
        return parameterDao.findById(id);
    }

//TypeOfOrganisation

    @Override
    public DebtorTypeOfOrganisation saveTypeOfOrganisation(DebtorTypeOfOrganisation typeOfOrganisation) {
        return typeOfOrganisationDao.save(typeOfOrganisation);
    }

    @Override
    public List<DebtorTypeOfOrganisation> findAllTypeOfOrganisations() {
        return typeOfOrganisationDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllTypeOfOrganisationsShort() {
        List<DebtorTypeOfOrganisation> typeOfOrganisations;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        typeOfOrganisations = typeOfOrganisationDao.findAll();

        for (DebtorTypeOfOrganisation typeOrg : typeOfOrganisations) {
            ShortDataPackage.setId(typeOrg.getId());
            ShortDataPackage.setValue(typeOrg.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public DebtorTypeOfOrganisation findTypeOfOrganisationByDescription(String description) {
        return typeOfOrganisationDao.findByDescription(description);
    }

    @Override
    public DebtorTypeOfOrganisation findTypeOfOrganisationById(Long id) {
        return typeOfOrganisationDao.findById(id);
    }

    @Override
    public boolean deleteTypeOfOrganisation(DebtorTypeOfOrganisation typeOfOrganisation) {
        typeOfOrganisationDao.delete(typeOfOrganisation);
        return typeOfOrganisationDao.exists(typeOfOrganisation.getId());
    }

//Cost Centre
@Override
    public DebtorCostCentre saveCostCentre(DebtorCostCentre costCentre) {
    return debtorCostCentreDao.save(costCentre);
}

    @Override
    public List<DebtorCostCentre> findAllCostCentres() {
        return debtorCostCentreDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllCostCentresShort() {
        List<DebtorCostCentre> costCentres;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        costCentres = debtorCostCentreDao.findAll();

        for (DebtorCostCentre cc : costCentres) {
            ShortDataPackage.setId(cc.getId());
            ShortDataPackage.setValue(cc.getCcNo());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<ShortDataPackage> findAllCostCentreByDebtor_idShort(Long debtorId) {
        List<DebtorCostCentre> costCentres;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        costCentres = debtorCostCentreDao.findByDebtor_id(debtorId);

        for (DebtorCostCentre cc : costCentres) {
            ShortDataPackage.setId(cc.getId());
            ShortDataPackage.setValue(cc.getCcNo());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<DebtorCostCentreAutoComp> findAllCostCentreAuto() {
        List<DebtorCostCentre> costCentres;
        List<DebtorCostCentreAutoComp> lstAutoDataPackage = new ArrayList<DebtorCostCentreAutoComp>();
        DebtorCostCentreAutoComp costCentreAutoComp = new DebtorCostCentreAutoComp();

        costCentres = debtorCostCentreDao.findAll();

        for (DebtorCostCentre cc : costCentres) {
            costCentreAutoComp.setId(cc.getId());
            costCentreAutoComp.setCcNo(cc.getCcNo());
            costCentreAutoComp.setName(cc.getName());
            lstAutoDataPackage.add(costCentreAutoComp);
            costCentreAutoComp = new DebtorCostCentreAutoComp();
        }

        return lstAutoDataPackage;
    }

    @Override
    public List<DebtorCostCentreAutoComp> findAllCostCentreByDebtor_idAuto(Long debtorId) {
        List<DebtorCostCentre> costCentres;
        List<DebtorCostCentreAutoComp> lstAutoDataPackage = new ArrayList<DebtorCostCentreAutoComp>();
        DebtorCostCentreAutoComp costCentreAutoComp = new DebtorCostCentreAutoComp();

        costCentres = debtorCostCentreDao.findByDebtor_id(debtorId);

        for (DebtorCostCentre cc : costCentres) {
            costCentreAutoComp.setId(cc.getId());
            costCentreAutoComp.setCcNo(cc.getCcNo());
            costCentreAutoComp.setName(cc.getName());
            lstAutoDataPackage.add(costCentreAutoComp);
            costCentreAutoComp = new DebtorCostCentreAutoComp();
        }

        return lstAutoDataPackage;
    }

    @Override
    public DebtorCostCentre findCostCentreByCcNo(String ccNo) {
        return debtorCostCentreDao.findByCcNo(ccNo);
    }

    @Override
    public DebtorCostCentre findCostCentreById(Long id) {
        return debtorCostCentreDao.findById(id);
    }
}
