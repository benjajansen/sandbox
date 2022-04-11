package com.benja.controller;

import com.benja.model.debtor.DebtorCostCentreAutoComp;
import com.benja.model.dataPackage.DebtCredAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.debtor.*;
import com.benja.service.AdminService;
import com.benja.service.DebtorService;
import com.benja.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * Created by Benja on 5/21/2017.
 */
@RestController
@RequestMapping("/rest/debtor")
public class DebtorResource {

    @Autowired
    private DebtorService debtorService;

    @Autowired
    private AdminService adminService;

    @Autowired
    private SystemService systemService;

    @RequestMapping(value = "/debtor/add", method = RequestMethod.POST)
    public Debtor addDebtor(@RequestBody DebtorPackage debtorPackage) {
        Debtor debtor = new Debtor();

        this.populateDebtorFromPackage(debtor, debtorPackage);
        
        return debtorService.saveDebtor(debtor);
    }

    @RequestMapping(value = "/debtor/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getDebtorAllShort() {
        return debtorService.findAllDebtorsShort();
    }

    @RequestMapping(value = "/debtor/shortTradeName", method = RequestMethod.POST)
    public List<ShortDataPackage> getDebtorAllShortTradeName() {
        return debtorService.findAllDebtorsShortTradingName();
    }

    @RequestMapping(value = "/debtor/getAllAuto", method = RequestMethod.POST)
    public List<DebtCredAutoComp> getDebtorAllAuto() {
        return debtorService.findAllDebtorsAuto();
    }

    @RequestMapping(value = "/debtor/accNo", method = RequestMethod.POST)
    public Debtor getDebtorsByAccNo(@RequestBody String accNo) {
        return debtorService.findDebtorByAccNo(accNo);
    }

    @RequestMapping(value = "/debtor/id", method = RequestMethod.POST)
    public Debtor getDebtorById(@RequestBody Long id) {
        return debtorService.findDebtorById(id);
    }

    @RequestMapping(value = "/debtor/update", method = RequestMethod.POST)
    public void updateDebtor(@RequestBody DebtorPackage debtorPackage) {
        Debtor currentDebtor = debtorService.findDebtorByAccNo(debtorPackage.getAccNo());

        this.populateDebtorFromPackage(currentDebtor, debtorPackage);

        debtorService.saveDebtor(currentDebtor);
    }

    private Debtor populateDebtorFromPackage(Debtor debtor, DebtorPackage debtorPackage) {
        try {
            debtor.setAccNo(debtorPackage.getAccNo());
            debtor.setTradeName(debtorPackage.getTradeName());
            debtor.setRegName(debtorPackage.getRegName());
            debtor.setRegNo(debtorPackage.getRegNo());
            debtor.setVatNo(debtorPackage.getVatNo());
            debtor.setTelNo(debtorPackage.getTelNo());
            debtor.setFaxNo(debtorPackage.getFaxNo());
            debtor.setWebSite(debtorPackage.getWebSite());
            debtor.setStreet1(debtorPackage.getStreet1());
            debtor.setStreet2(debtorPackage.getStreet2());
            debtor.setStreet3(debtorPackage.getStreet3());
            debtor.setStreet4(debtorPackage.getStreet4());
            debtor.setStreetPostalCode(debtorPackage.getStreetPostalCode());
            debtor.setBox1(debtorPackage.getBox1());
            debtor.setBox2(debtorPackage.getBox2());
            debtor.setBox3(debtorPackage.getBox3());
            debtor.setBox4(debtorPackage.getBox4());
            debtor.setBoxPostalCode(debtorPackage.getBoxPostalCode());
            debtor.setAccSName(debtorPackage.getAccSName());
            debtor.setAccFName(debtorPackage.getAccFName());
            debtor.setAccCellNo(debtorPackage.getAccCellNo());
            debtor.setAccEmail(debtorPackage.getAccEmail());
            debtor.setOppSName(debtorPackage.getOppSName());
            debtor.setOppFName(debtorPackage.getOppFName());
            debtor.setOppCellNo(debtorPackage.getOppCellNo());
            debtor.setOppEmail(debtorPackage.getOppEmail());
            debtor.setBankName(debtorPackage.getBankName());
            debtor.setBankBranchNo(debtorPackage.getBankBranchNo());
            debtor.setBankAccNo(debtorPackage.getBankAccNo());
            debtor.setBankAccName(debtorPackage.getBankAccName());
            debtor.setIntPerc(debtorPackage.getIntPerc());
            debtor.setArrearsInt(debtorPackage.isArrearsInt());

            debtor.setStartDayTime(debtorPackage.getStartDayTime());
            debtor.setEndDayTime(debtorPackage.getEndDayTime());

            debtor.setSaturday(debtorPackage.isSaturday());
            debtor.setSunday(debtorPackage.isSunday());
            debtor.setHolidays(debtorPackage.isHolidays());
            debtor.setBackOrder(debtorPackage.isBackOrder());

            debtor.setInsured(debtorPackage.isInsured());
            debtor.setOrderReq(debtorPackage.isOrderReq());
            debtor.setCreditRef(debtorPackage.getCreditRef());
            debtor.setCreditExpDate(debtorPackage.getCreditExpDate());
            debtor.setCreditAmount(debtorPackage.getCreditAmount());

            debtor.setSuspend(debtorPackage.isSuspend());

            //this is actually returned as an object an not as a string.
            debtor.setCreateUser(debtorPackage.getCreateUser());

            if(debtorPackage.getParent() != null && !debtorPackage.getParent().isEmpty())
                debtor.setParent(debtorService.findDebtorByAccNo(debtorPackage.getParent()));

            if(debtorPackage.getBusUnit() != null && !debtorPackage.getBusUnit().isEmpty())
                debtor.setBusUnit(debtorService.findBusinessUnitByDescription(debtorPackage.getBusUnit()));

            if(debtorPackage.getCategory() != null && !debtorPackage.getCategory().isEmpty())
                debtor.setCategory(debtorService.findCategoryByDescription(debtorPackage.getCategory()));

            if(debtorPackage.getTypeOrg() != null && !debtorPackage.getTypeOrg().isEmpty())
                debtor.setTypeOrg(debtorService.findTypeOfOrganisationByDescription(debtorPackage.getTypeOrg()));

            if(debtorPackage.getBusType() != null && !debtorPackage.getBusType().isEmpty())
                debtor.setBusType(debtorService.findBusinessTypeByDescription(debtorPackage.getBusType()));

            if(debtorPackage.getBranch() != null && !debtorPackage.getBranch().isEmpty())
                debtor.setBranch(adminService.findBranchByDescription(debtorPackage.getBranch()));

            if(debtorPackage.getCountry() != null && !debtorPackage.getCountry().isEmpty())
                debtor.setCountry(adminService.findCountryByDescription(debtorPackage.getCountry()));

            if(debtorPackage.getProvince() != null && !debtorPackage.getProvince().isEmpty())
                debtor.setProvince(adminService.findProvinceByDescription(debtorPackage.getProvince()));

            if(debtorPackage.getCity() != null && !debtorPackage.getCity().isEmpty())
                debtor.setCity(adminService.findCityTownByDescription(debtorPackage.getCity()));

            if(debtorPackage.getAccTitle() != null && !debtorPackage.getAccTitle().isEmpty())
                debtor.setAccTitle(systemService.findTitleByDescription(debtorPackage.getAccTitle()));

            if(debtorPackage.getOppTitle() != null && !debtorPackage.getOppTitle().isEmpty())
                debtor.setOppTitle(systemService.findTitleByDescription(debtorPackage.getOppTitle()));

            if(debtorPackage.getPayTerm() != null && !debtorPackage.getPayTerm().isEmpty())
                debtor.setPayTerm(systemService.findPaymentTermByDescription(debtorPackage.getPayTerm()));

            if(debtorPackage.getPayMethod() != null && !debtorPackage.getPayMethod().isEmpty())
                debtor.setPayMethod(systemService.findPaymentMethodByDescription(debtorPackage.getPayMethod()));

            if(debtorPackage.getPayType() != null && !debtorPackage.getPayType().isEmpty())
                debtor.setPayType(systemService.findPaymentTypeByDescription(debtorPackage.getPayType()));


        }
        catch (Exception e) {
            return debtor;
        }

        return debtor;
    }
    
//Business Type    
    
    @RequestMapping(value = "/businessType/add", method = RequestMethod.POST)
    public DebtorBusinessType addBusinessType(@RequestBody DebtorBusinessType businessType) {
        return debtorService.saveBusinessType(businessType);
    }

    @RequestMapping(value = "/businessType/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getBusinessTypeAllShort() {
        return debtorService.findAllBusinessTypesShort();
    }

    @RequestMapping(value = "/businessType/id", method = RequestMethod.POST)
    public DebtorBusinessType getBusinessTypeById(@RequestBody Long id) {
        return debtorService.findBusinessTypeById(id);
    }

    @RequestMapping(value = "/businessType/update", method = RequestMethod.POST)
    public void updateBusinessType(@RequestBody DebtorBusinessType businessType) {
        DebtorBusinessType currentBusinessType = debtorService.findBusinessTypeById(businessType.getId());
        currentBusinessType.setDescription(businessType.getDescription());
        debtorService.saveBusinessType(currentBusinessType);
    }

    @RequestMapping(value = "/businessType/delete", method = RequestMethod.POST)
    public boolean deleteBusinessType(@RequestBody DebtorBusinessType businessType) {
        return debtorService.deleteBusinessType(businessType);
    }
    
//Business Unit    
    
    @RequestMapping(value = "/businessUnit/add", method = RequestMethod.POST)
    public DebtorBusinessUnit addBusinessUnit(@RequestBody DebtorBusinessUnit businessUnit) {
        return debtorService.saveBusinessUnit(businessUnit);
    }

    @RequestMapping(value = "/businessUnit/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getBusinessUnitAllShort() {
        return debtorService.findAllBusinessUnitsShort();
    }

    @RequestMapping(value = "/businessUnit/id", method = RequestMethod.POST)
    public DebtorBusinessUnit getBusinessUnitById(@RequestBody Long id) {
        return debtorService.findBusinessUnitById(id);
    }

    @RequestMapping(value = "/businessUnit/update", method = RequestMethod.POST)
    public void updateBusinessUnit(@RequestBody DebtorBusinessUnit businessUnit) {
        DebtorBusinessUnit currentBusinessUnit = debtorService.findBusinessUnitById(businessUnit.getId());
        currentBusinessUnit.setDescription(businessUnit.getDescription());
        debtorService.saveBusinessUnit(currentBusinessUnit);
    }

    @RequestMapping(value = "/businessUnit/delete", method = RequestMethod.POST)
    public boolean deleteBusinessUnit(@RequestBody DebtorBusinessUnit businessUnit) {
        return debtorService.deleteBusinessUnit(businessUnit);
    }

//Category

    @RequestMapping(value = "/category/add", method = RequestMethod.POST)
    public DebtorCategory addCategory(@RequestBody DebtorCategory category) {
        return debtorService.saveCategory(category);
    }

    @RequestMapping(value = "/category/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCategoryAllShort() {
        return debtorService.findAllCategorysShort();
    }

    @RequestMapping(value = "/category/id", method = RequestMethod.POST)
    public DebtorCategory getCategoryById(@RequestBody Long id) {
        return debtorService.findCategoryById(id);
    }

    @RequestMapping(value = "/category/update", method = RequestMethod.POST)
    public void updateCategory(@RequestBody DebtorCategory category) {
        DebtorCategory currentCategory = debtorService.findCategoryById(category.getId());
        currentCategory.setDescription(category.getDescription());
        debtorService.saveCategory(currentCategory);
    }

    @RequestMapping(value = "/category/delete", method = RequestMethod.POST)
    public boolean deleteCategory(@RequestBody DebtorCategory category) {
        return debtorService.deleteCategory(category);
    }
    
//Comment

    @RequestMapping(value = "/comment/add", method = RequestMethod.POST)
    public DebtorComment addComment(@RequestBody DebtorComment comment) {
        return debtorService.saveComment(comment);
    }

    //I have to add the comment short functions here, not used now, so going give it a skip

    @RequestMapping(value = "/comment/update", method = RequestMethod.POST)
    public void updateComment(@RequestBody DebtorComment comment) {
        DebtorComment currentComment = debtorService.findCommentById(comment.getId());
        debtorService.saveComment(currentComment);
    }
    
//Parameter

    @RequestMapping(value = "/parameter/add", method = RequestMethod.POST)
    public DebtorParameter addParameter(@RequestBody DebtorParameter parameter) {
        return debtorService.saveParameter(parameter);
    }

    @RequestMapping(value = "/parameter/id", method = RequestMethod.POST)
    public DebtorParameter getParameterById(@RequestBody Long id) {
        return debtorService.findParameterById(id);
    }

    @RequestMapping(value = "/parameter/update", method = RequestMethod.POST)
    public void updateParameter(@RequestBody DebtorParameter parameter) {
        DebtorParameter currentParameter = debtorService.findParameterById(parameter.getId());
        debtorService.saveParameter(currentParameter);
    }
    
//TypeOfOrganisation
    @RequestMapping(value = "/typeOfOrganisation/add", method = RequestMethod.POST)
    public DebtorTypeOfOrganisation addTypeOfOrganisation(@RequestBody DebtorTypeOfOrganisation typeOfOrganisation) {
    return debtorService.saveTypeOfOrganisation(typeOfOrganisation);
}

    @RequestMapping(value = "/typeOfOrganisation/getAll", method = RequestMethod.POST)
    public List<DebtorTypeOfOrganisation> getTypeOfOrganisationAll() {
        return debtorService.findAllTypeOfOrganisations();
    }

    @RequestMapping(value = "/typeOfOrganisation/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getTypeOfOrganisationAllShort() {
        return debtorService.findAllTypeOfOrganisationsShort();
    }

    @RequestMapping(value = "/typeOfOrganisation/id", method = RequestMethod.POST)
    public DebtorTypeOfOrganisation getTypeOfOrganisationById(@RequestBody Long id) {
        return debtorService.findTypeOfOrganisationById(id);
    }

    @RequestMapping(value = "/typeOfOrganisation/update", method = RequestMethod.POST)
    public void updateTypeOfOrganisation(@RequestBody DebtorTypeOfOrganisation typeOfOrganisation) {
        DebtorTypeOfOrganisation currentTypeOfOrganisation = debtorService.findTypeOfOrganisationById(typeOfOrganisation.getId());
        currentTypeOfOrganisation.setDescription(typeOfOrganisation.getDescription());
        debtorService.saveTypeOfOrganisation(currentTypeOfOrganisation);
    }

    @RequestMapping(value = "/typeOfOrganisation/delete", method = RequestMethod.POST)
    public boolean deleteTypeOfOrganisation(@RequestBody DebtorTypeOfOrganisation typeOfOrganisation) {
        return debtorService.deleteTypeOfOrganisation(typeOfOrganisation);
    }
    
//Cost Centre
    @RequestMapping(value = "/costCentre/add", method = RequestMethod.POST)
    public DebtorCostCentre addDebtorCostCentre(@RequestBody DebtorCostCentrePackage debtorPackage) {
    DebtorCostCentre costCentre = new DebtorCostCentre();

    this.populateDebtorCostCentreFromPackage(costCentre, debtorPackage);

    return debtorService.saveCostCentre(costCentre);
}

    @RequestMapping(value = "/costCentre/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCostCentreAllShort() {
        return debtorService.findAllCostCentresShort();
    }

    @RequestMapping(value = "/costCentre/getAllByDebtorShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCostCentreAllByDebtor_idShort(@RequestBody Long debtorId) {
        return debtorService.findAllCostCentreByDebtor_idShort(debtorId);
    }

    @RequestMapping(value = "/costCentre/getAllAuto", method = RequestMethod.POST)
    public List<DebtorCostCentreAutoComp> findAllCostCentreAuto() {
        return debtorService.findAllCostCentreAuto();
    }

    @RequestMapping(value = "/costCentre/getAllByDebtorAuto", method = RequestMethod.POST)
    public List<DebtorCostCentreAutoComp> getCostCentreAllByDebtor_idAuto(@RequestBody Long debtorId) {
        return debtorService.findAllCostCentreByDebtor_idAuto(debtorId);
    }

    @RequestMapping(value = "/costCentre/ccNo", method = RequestMethod.POST)
    public DebtorCostCentre getCostCentresByCcNo(@RequestBody String ccNo) {
        return debtorService.findCostCentreByCcNo(ccNo);
    }

    @RequestMapping(value = "/costCentre/id", method = RequestMethod.POST)
    public DebtorCostCentre getCostCentreById(@RequestBody Long id) {
        return debtorService.findCostCentreById(id);
    }

    @RequestMapping(value = "/costCentre/update", method = RequestMethod.POST)
    public void updateCostCentre(@RequestBody DebtorCostCentrePackage debtorPackage) {
        DebtorCostCentre currentDebtorCostCentre = debtorService.findCostCentreByCcNo(debtorPackage.getCcNo());

        this.populateDebtorCostCentreFromPackage(currentDebtorCostCentre, debtorPackage);

        debtorService.saveCostCentre(currentDebtorCostCentre);
    }

    private DebtorCostCentre populateDebtorCostCentreFromPackage(DebtorCostCentre costCentre, DebtorCostCentrePackage costCentrePackage) {
        try {
            costCentre.setCcNo(costCentrePackage.getCcNo());
            costCentre.setName(costCentrePackage.getName());
            costCentre.setStreet1(costCentrePackage.getStreet1());
            costCentre.setStreet2(costCentrePackage.getStreet2());
            costCentre.setStreet3(costCentrePackage.getStreet3());
            costCentre.setStreet4(costCentrePackage.getStreet4());
            costCentre.setStreetPostalCode(costCentrePackage.getStreetPostalCode());
            costCentre.setOppSName(costCentrePackage.getOppSName());
            costCentre.setOppFName(costCentrePackage.getOppFName());
            costCentre.setOppCellNo(costCentrePackage.getOppCellNo());
            costCentre.setOppEmail(costCentrePackage.getOppEmail());
            costCentre.setGps(costCentrePackage.getGps());

            costCentre.setSuspended(costCentrePackage.isSuspended());

            //this is actually returned as an object an not as a string.
            costCentre.setCreateUser(costCentrePackage.getCreateUser());

            if(costCentrePackage.getDebtor() != null && !costCentrePackage.getDebtor().isEmpty())
                costCentre.setDebtor(debtorService.findDebtorByAccNo(costCentrePackage.getDebtor()));

            if(costCentrePackage.getBranch() != null && !costCentrePackage.getBranch().isEmpty())
                costCentre.setBranch(adminService.findBranchByDescription(costCentrePackage.getBranch()));

            if(costCentrePackage.getCountry() != null && !costCentrePackage.getCountry().isEmpty())
                costCentre.setCountry(adminService.findCountryByDescription(costCentrePackage.getCountry()));

            if(costCentrePackage.getProvince() != null && !costCentrePackage.getProvince().isEmpty())
                costCentre.setProvince(adminService.findProvinceByDescription(costCentrePackage.getProvince()));

            if(costCentrePackage.getCity() != null && !costCentrePackage.getCity().isEmpty())
                costCentre.setCity(adminService.findCityTownByDescription(costCentrePackage.getCity()));

            if(costCentrePackage.getOppTitle() != null && !costCentrePackage.getOppTitle().isEmpty())
                costCentre.setOppTitle(systemService.findTitleByDescription(costCentrePackage.getOppTitle()));
        }
        catch (Exception e) {
            return costCentre;
        }

        return costCentre;
    }    
}
