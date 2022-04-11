package com.benja.controller;

import com.benja.model.dataPackage.DebtCredAutoComp;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.creditor.*;
import com.benja.service.AdminService;
import com.benja.service.CreditorService;
import com.benja.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Benja on 5/28/2017.
 */
@RestController
@RequestMapping("/rest/creditor")
public class CreditorResource {

    @Autowired
    private CreditorService creditorService;
    
    @Autowired
    private AdminService adminService;
    
    @Autowired
    private SystemService systemService;

    @RequestMapping(value = "/creditor/add", method = RequestMethod.POST)
    public Creditor addCreditor(@RequestBody CreditorPackage creditorPackage) {
        Creditor creditor = new Creditor();

        this.populateCreditorFromPackage(creditor, creditorPackage);
        
        return creditorService.saveCreditor(creditor);
    }

    @RequestMapping(value = "/creditor/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCreditorAllShort() {
        return creditorService.findAllCreditorsShort();
    }

    @RequestMapping(value = "/creditor/getAllAuto", method = RequestMethod.POST)
    public List<DebtCredAutoComp> getCreditorAllAuto() {
        return creditorService.findAllCreditorsAuto();
    }

    @RequestMapping(value = "/creditor/accNo", method = RequestMethod.POST)
    public Creditor getCreditorByAccNo(@RequestBody String accNo) {
        return creditorService.findCreditorByAccNo(accNo);
    }

    @RequestMapping(value = "/creditor/id", method = RequestMethod.POST)
    public Creditor getCreditorById(@RequestBody Long id) {
        return creditorService.findCreditorById(id);
    }

    @RequestMapping(value = "/creditor/update", method = RequestMethod.POST)
    public void updateCreditor(@RequestBody CreditorPackage creditorPackage) {
        Creditor currentCreditor = creditorService.findCreditorByAccNo(creditorPackage.getAccNo());

        this.populateCreditorFromPackage(currentCreditor, creditorPackage);

        creditorService.saveCreditor(currentCreditor);
    }

    private Creditor populateCreditorFromPackage(Creditor creditor, CreditorPackage creditorPackage) {
        try {
            creditor.setAccNo(creditorPackage.getAccNo());
            creditor.setTradeName(creditorPackage.getTradeName());
            creditor.setRegName(creditorPackage.getRegName());
            creditor.setRegNo(creditorPackage.getRegNo());
            creditor.setVatVendor(creditorPackage.isVatVendor());
            creditor.setVatNo(creditorPackage.getVatNo());
            creditor.setTelNo(creditorPackage.getTelNo());
            creditor.setFaxNo(creditorPackage.getFaxNo());
            creditor.setWebSite(creditorPackage.getWebSite());
            creditor.setStreet1(creditorPackage.getStreet1());
            creditor.setStreet2(creditorPackage.getStreet2());
            creditor.setStreet3(creditorPackage.getStreet3());
            creditor.setStreet4(creditorPackage.getStreet4());
            creditor.setStreetPostalCode(creditorPackage.getStreetPostalCode());
            creditor.setBox1(creditorPackage.getBox1());
            creditor.setBox2(creditorPackage.getBox2());
            creditor.setBox3(creditorPackage.getBox3());
            creditor.setBox4(creditorPackage.getBox4());
            creditor.setBoxPostalCode(creditorPackage.getBoxPostalCode());
            creditor.setAccSName(creditorPackage.getAccSName());
            creditor.setAccFName(creditorPackage.getAccFName());
            creditor.setAccCellNo(creditorPackage.getAccCellNo());
            creditor.setAccEmail(creditorPackage.getAccEmail());
            creditor.setOppSName(creditorPackage.getOppSName());
            creditor.setOppFName(creditorPackage.getOppFName());
            creditor.setOppCellNo(creditorPackage.getOppCellNo());
            creditor.setOppEmail(creditorPackage.getOppEmail());
            creditor.setBankName(creditorPackage.getBankName());
            creditor.setBankBranchNo(creditorPackage.getBankBranchNo());
            creditor.setBankAccNo(creditorPackage.getBankAccNo());
            creditor.setBankAccName(creditorPackage.getBankAccName());
            creditor.setSettleDiscount(creditorPackage.getSettleDiscount());
            creditor.setSettleDays(creditorPackage.getSettleDays());
            creditor.setTradeDisc(creditorPackage.getTradeDiscount());
            creditor.setBeeScore(creditorPackage.getBeeScore());
            creditor.setBeeCertReceived(creditorPackage.isBeeCertReceived());
            creditor.setBeeCertExpDate(creditorPackage.getBeeCertExpDate());
            creditor.setBeeOwnership(creditorPackage.getBeeOwnership());
            creditor.setBeeWoman(creditorPackage.getBeeWoman());
            creditor.setBeeYouth(creditorPackage.getBeeYouth());
            creditor.setEmpDisabled(creditorPackage.getEmpDisabled());
            creditor.setOrderReq(creditorPackage.isOrderReq());
            creditor.setSuspended(creditorPackage.isSuspended());
            creditor.setSuspendedDate(creditorPackage.getSuspendedDate());
            creditor.setCreateUser(creditorPackage.getCreateUser());

            if(creditorPackage.getParent() != null && !creditorPackage.getParent().isEmpty())
                creditor.setParent(creditorService.findCreditorByAccNo(creditorPackage.getParent()));

            if(creditorPackage.getGroup() != null && !creditorPackage.getGroup().isEmpty())
                creditor.setGroup(creditorService.findGroupByDescription(creditorPackage.getGroup()));

            if(creditorPackage.getClassification() != null && !creditorPackage.getClassification().isEmpty())
                creditor.setClassification(creditorService.findClassificationByDescription(creditorPackage.getClassification()));

            if(creditorPackage.getBranch() != null && !creditorPackage.getBranch().isEmpty())
                creditor.setBranch(adminService.findBranchByDescription(creditorPackage.getBranch()));

            if(creditorPackage.getCountry() != null && !creditorPackage.getCountry().isEmpty())
                creditor.setCountry(adminService.findCountryByDescription(creditorPackage.getCountry()));

            if(creditorPackage.getProvince() != null && !creditorPackage.getProvince().isEmpty())
                creditor.setProvince(adminService.findProvinceByDescription(creditorPackage.getProvince()));

            if(creditorPackage.getCity() != null && !creditorPackage.getCity().isEmpty())
                creditor.setCity(adminService.findCityTownByDescription(creditorPackage.getCity()));

            if(creditorPackage.getAccTitle() != null && !creditorPackage.getAccTitle().isEmpty())
                creditor.setAccTitle(systemService.findTitleByDescription(creditorPackage.getAccTitle()));

            if(creditorPackage.getOppTitle() != null && !creditorPackage.getOppTitle().isEmpty())
                creditor.setOppTitle(systemService.findTitleByDescription(creditorPackage.getOppTitle()));

            if(creditorPackage.getPayTerm() != null && !creditorPackage.getPayTerm().isEmpty())
                creditor.setPayTerm(systemService.findPaymentTermByDescription(creditorPackage.getPayTerm()));

            if(creditorPackage.getSettleDiscMethod() != null && !creditorPackage.getSettleDiscMethod().isEmpty())
                creditor.setSettleDiscMethod(systemService.findSettleDiscMethodByDescription(creditorPackage.getSettleDiscMethod()));

            if(creditorPackage.getTradeLevel() != null && !creditorPackage.getTradeLevel().isEmpty())
                creditor.setTradeLevel(systemService.findTradeLevelByDescription(creditorPackage.getTradeLevel()));

            if(creditorPackage.getBeeType() != null && !creditorPackage.getBeeType().isEmpty())
                creditor.setBeeType(systemService.findBEETypeByDescription(creditorPackage.getBeeType()));

            if(creditorPackage.getBeeLevel() != null && !creditorPackage.getBeeLevel().isEmpty())
                creditor.setBeeLevel(systemService.findBEELevelByDescription(creditorPackage.getBeeLevel()));
        }
        catch (Exception e) {
            return creditor;
        }

        return creditor;
    }
    
//Classification

    @RequestMapping(value = "/classification/add", method = RequestMethod.POST)
    public CreditorClassification addClassification(@RequestBody CreditorClassification classification) {
        return creditorService.saveClassification(classification);
    }

    @RequestMapping(value = "/classification/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getClassificationAllShort() {
        return creditorService.findAllClassificationsShort();
    }

    @RequestMapping(value = "/classification/id", method = RequestMethod.POST)
    public CreditorClassification getClassificationById(@RequestBody Long id) {
        return creditorService.findClassificationById(id);
    }

    @RequestMapping(value = "/classification/update", method = RequestMethod.POST)
    public void updateClassification(@RequestBody CreditorClassification classification) {
        CreditorClassification currentClassification = creditorService.findClassificationById(classification.getId());
        currentClassification.setDescription(classification.getDescription());
        creditorService.saveClassification(currentClassification);
    }

    @RequestMapping(value = "/classification/delete", method = RequestMethod.POST)
    public boolean deleteClassification(@RequestBody CreditorClassification classification) {
        return creditorService.deleteClassification(classification);
    }


//Comment

    @RequestMapping(value = "/comment/add", method = RequestMethod.POST)
    public CreditorComment addComment(@RequestBody CreditorComment comment) {
        return creditorService.saveComment(comment);
    }

    //I have to add the comment short functions here, not used now, so going give it a skip

    @RequestMapping(value = "/comment/update", method = RequestMethod.POST)
    public void updateComment(@RequestBody CreditorComment comment) {
        CreditorComment currentComment = creditorService.findCommentById(comment.getId());
        creditorService.saveComment(currentComment);
    }

//Parameter

    @RequestMapping(value = "/parameter/add", method = RequestMethod.POST)
    public CreditorParameter addParameter(@RequestBody CreditorParameter parameter) {
        return creditorService.saveParameter(parameter);
    }

    @RequestMapping(value = "/parameter/id", method = RequestMethod.POST)
    public CreditorParameter getParameterById(@RequestBody Long id) {
        return creditorService.findParameterById(id);
    }

    @RequestMapping(value = "/parameter/update", method = RequestMethod.POST)
    public void updateParameter(@RequestBody CreditorParameter parameter) {
        CreditorParameter currentParameter = creditorService.findParameterById(parameter.getId());
        creditorService.saveParameter(currentParameter);
    }

    //Group

    @RequestMapping(value = "/group/add", method = RequestMethod.POST)
    public CreditorGroup addGroup(@RequestBody CreditorGroup group) {
        return creditorService.saveGroup(group);
    }

    @RequestMapping(value = "/group/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getGroupAllShort() {
        return creditorService.findAllGroupsShort();
    }

    @RequestMapping(value = "/group/id", method = RequestMethod.POST)
    public CreditorGroup getGroupById(@RequestBody Long id) {
        return creditorService.findGroupById(id);
    }

    @RequestMapping(value = "/group/update", method = RequestMethod.POST)
    public void updateGroup(@RequestBody CreditorGroup group) {
        CreditorGroup currentGroup = creditorService.findGroupById(group.getId());
        currentGroup.setDescription(group.getDescription());
        creditorService.saveGroup(currentGroup);
    }

    @RequestMapping(value = "/group/delete", method = RequestMethod.POST)
    public boolean deleteGroup(@RequestBody CreditorGroup group) {
        return creditorService.deleteGroup(group);
    }
}
