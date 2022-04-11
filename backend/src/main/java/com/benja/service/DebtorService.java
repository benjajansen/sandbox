package com.benja.service;

import com.benja.model.debtor.DebtorCostCentreAutoComp;
import com.benja.model.dataPackage.DebtCredAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.debtor.*;

import java.util.List;

/**
 * Created by Benja on 5/20/2017.
 */
public interface DebtorService {

    Debtor saveDebtor(Debtor debtor);

    List<Debtor> findAllDebtors();

    List<ShortDataPackage> findAllDebtorsShort();

    List<ShortDataPackage> findAllDebtorsShortTradingName();

    List<DebtCredAutoComp> findAllDebtorsAuto();

    Debtor findDebtorByAccNo(String accNo);

    Debtor findDebtorById(Long id);

//Business Type
    DebtorBusinessType saveBusinessType(DebtorBusinessType businessType);

    List<DebtorBusinessType> findAllBusinessTypes();

    List<ShortDataPackage> findAllBusinessTypesShort();

    DebtorBusinessType findBusinessTypeByDescription(String description);

    DebtorBusinessType findBusinessTypeById(Long id);

    boolean deleteBusinessType(DebtorBusinessType businessType);

//Business Unit
    DebtorBusinessUnit saveBusinessUnit(DebtorBusinessUnit businessUnit);

    List<DebtorBusinessUnit> findAllBusinessUnits();

    List<ShortDataPackage> findAllBusinessUnitsShort();

    DebtorBusinessUnit findBusinessUnitByDescription(String description);

    DebtorBusinessUnit findBusinessUnitById(Long id);

    boolean deleteBusinessUnit(DebtorBusinessUnit businessUnit);
    
//Category
    DebtorCategory saveCategory(DebtorCategory category);

    List<DebtorCategory> findAllCategorys();

    List<ShortDataPackage> findAllCategorysShort();

    DebtorCategory findCategoryByDescription(String description);

    DebtorCategory findCategoryById(Long id);

    boolean deleteCategory(DebtorCategory category);
    
//Comment
    DebtorComment saveComment(DebtorComment comment);

    List<DebtorComment> findAllComments();

    List<DebtorComment> findAllCommentsByDebtorId(Long debtorId);

    List<DebtorComment> findAllCommentsByDebtorAccNo(String debtAccNo);

    DebtorComment findCommentById(Long id);

//Parameter
    DebtorParameter saveParameter(DebtorParameter parameter);

    List<DebtorParameter> findAllParameters();

    DebtorParameter findParameterById(Long id);

//TypeOfOrganisation
    DebtorTypeOfOrganisation saveTypeOfOrganisation(DebtorTypeOfOrganisation typeOfOrganisation);

    List<DebtorTypeOfOrganisation> findAllTypeOfOrganisations();

    List<ShortDataPackage> findAllTypeOfOrganisationsShort();

    DebtorTypeOfOrganisation findTypeOfOrganisationByDescription(String description);

    DebtorTypeOfOrganisation findTypeOfOrganisationById(Long id);

    boolean deleteTypeOfOrganisation(DebtorTypeOfOrganisation typeOfOrganisation);

//Cost Centre
    DebtorCostCentre saveCostCentre(DebtorCostCentre costCentre);

    List<DebtorCostCentre> findAllCostCentres();

    List<ShortDataPackage> findAllCostCentresShort();

    List<ShortDataPackage> findAllCostCentreByDebtor_idShort(Long debtorId);

    List<DebtorCostCentreAutoComp> findAllCostCentreAuto();

    List<DebtorCostCentreAutoComp> findAllCostCentreByDebtor_idAuto(Long debtorId);

    DebtorCostCentre findCostCentreByCcNo(String ccNo);

    DebtorCostCentre findCostCentreById(Long id);
}
