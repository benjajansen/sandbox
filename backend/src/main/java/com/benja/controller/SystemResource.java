package com.benja.controller;

import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.system.*;
import com.benja.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@RestController
@RequestMapping("/rest/system")
public class SystemResource {

    @Autowired
    private SystemService systemService;

    @RequestMapping(value = "/paymentMethod/add", method = RequestMethod.POST)
    public SystemPaymentMethod addPaymentMethod(@RequestBody SystemPaymentMethod paymentMethod) {
        return systemService.savePaymentMethod(paymentMethod);
    }

    @RequestMapping(value = "/paymentMethod/id", method = RequestMethod.POST)
    public SystemPaymentMethod getPaymentMethodById(@RequestBody Long id) {
        return systemService.findPaymentMethodById(id);
    }

    @RequestMapping(value = "/paymentMethod/update", method = RequestMethod.POST)
    public void updatePaymentMethod(@RequestBody SystemPaymentMethod paymentMethod) {
        SystemPaymentMethod currentPaymentMethod = systemService.findPaymentMethodById(paymentMethod.getId());
        currentPaymentMethod.setDescription(paymentMethod.getDescription());
        systemService.savePaymentMethod(currentPaymentMethod);
    }

    @RequestMapping(value = "/paymentMethod/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getPaymentMethodAllShort() {
        return systemService.findAllPaymentMethodsShort();
    }

    @RequestMapping(value = "/paymentMethod/delete", method = RequestMethod.POST)
    public boolean deletePaymentMethod(@RequestBody SystemPaymentMethod paymentMethod) {
        return systemService.deletePaymentMethod(paymentMethod);
    }
    
//PaymentTerm

    @RequestMapping(value = "/paymentTerm/add", method = RequestMethod.POST)
    public SystemPaymentTerm addPaymentTerm(@RequestBody SystemPaymentTerm paymentTerm) {
        return systemService.savePaymentTerm(paymentTerm);
    }

    @RequestMapping(value = "/paymentTerm/id", method = RequestMethod.POST)
    public SystemPaymentTerm getPaymentTermById(@RequestBody Long id) {
        return systemService.findPaymentTermById(id);
    }

    @RequestMapping(value = "/paymentTerm/update", method = RequestMethod.POST)
    public void updatePaymentTerm(@RequestBody SystemPaymentTerm paymentTerm) {
        SystemPaymentTerm currentPaymentTerm = systemService.findPaymentTermById(paymentTerm.getId());
        currentPaymentTerm.setDescription(paymentTerm.getDescription());
        systemService.savePaymentTerm(currentPaymentTerm);
    }

    @RequestMapping(value = "/paymentTerm/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getPaymentTermAllShort() {
        return systemService.findAllPaymentTermsShort();
    }

    @RequestMapping(value = "/paymentTerm/delete", method = RequestMethod.POST)
    public boolean deletePaymentTerm(@RequestBody SystemPaymentTerm paymentTerm) {
        return systemService.deletePaymentTerm(paymentTerm);
    }

//PaymentType

    @RequestMapping(value = "/paymentType/add", method = RequestMethod.POST)
    public SystemPaymentType addPaymentType(@RequestBody SystemPaymentType paymentType) {
        return systemService.savePaymentType(paymentType);
    }

    @RequestMapping(value = "/paymentType/id", method = RequestMethod.POST)
    public SystemPaymentType getPaymentTypeById(@RequestBody Long id) {
        return systemService.findPaymentTypeById(id);
    }

    @RequestMapping(value = "/paymentType/update", method = RequestMethod.POST)
    public void updatePaymentType(@RequestBody SystemPaymentType paymentType) {
        SystemPaymentType currentPaymentType = systemService.findPaymentTypeById(paymentType.getId());
        currentPaymentType.setDescription(paymentType.getDescription());
        systemService.savePaymentType(currentPaymentType);
    }

    @RequestMapping(value = "/paymentType/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getPaymentTypeAllShort() {
        return systemService.findAllPaymentTypesShort();
    }

    @RequestMapping(value = "/paymentType/delete", method = RequestMethod.POST)
    public boolean deletePaymentType(@RequestBody SystemPaymentType paymentType) {
        return systemService.deletePaymentType(paymentType);
    }

//Title

    @RequestMapping(value = "/title/add", method = RequestMethod.POST)
    public SystemTitle addTitle(@RequestBody SystemTitle title) {
        return systemService.saveTitle(title);
    }

    @RequestMapping(value = "/title/id", method = RequestMethod.POST)
    public SystemTitle getTitleById(@RequestBody Long id) {
        return systemService.findTitleById(id);
    }

    @RequestMapping(value = "/title/update", method = RequestMethod.POST)
    public void updateTitle(@RequestBody SystemTitle title) {
        SystemTitle currentTitle = systemService.findTitleById(title.getId());
        currentTitle.setDescription(title.getDescription());
        systemService.saveTitle(currentTitle);
    }

    @RequestMapping(value = "/title/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getTitleAllShort() {
        return systemService.findAllTitlesShort();
    }

    @RequestMapping(value = "/title/delete", method = RequestMethod.POST)
    public boolean deleteTitle(@RequestBody SystemTitle title) {
        return systemService.deleteTitle(title);
    }

//BEELevel

    @RequestMapping(value = "/beeLevel/add", method = RequestMethod.POST)
    public SystemBEELevel addBEELevel(@RequestBody SystemBEELevel beeLevel) {
        return systemService.saveBEELevel(beeLevel);
    }

    @RequestMapping(value = "/beeLevel/id", method = RequestMethod.POST)
    public SystemBEELevel getBEELevelById(@RequestBody Long id) {
        return systemService.findBEELevelById(id);
    }

    @RequestMapping(value = "/beeLevel/update", method = RequestMethod.POST)
    public void updateBEELevel(@RequestBody SystemBEELevel beeLevel) {
        SystemBEELevel currentBEELevel = systemService.findBEELevelById(beeLevel.getId());
        currentBEELevel.setDescription(beeLevel.getDescription());
        systemService.saveBEELevel(currentBEELevel);
    }

    @RequestMapping(value = "/beeLevel/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getBEELevelAllShort() {
        return systemService.findAllBEELevelsShort();
    }

    @RequestMapping(value = "/beeLevel/delete", method = RequestMethod.POST)
    public boolean deleteBEELevel(@RequestBody SystemBEELevel beeLevel) {
        return systemService.deleteBEELevel(beeLevel);
    }

//BEEType

    @RequestMapping(value = "/beeType/add", method = RequestMethod.POST)
    public SystemBEEType addBEEType(@RequestBody SystemBEEType beeType) {
        return systemService.saveBEEType(beeType);
    }

    @RequestMapping(value = "/beeType/id", method = RequestMethod.POST)
    public SystemBEEType getBEETypeById(@RequestBody Long id) {
        return systemService.findBEETypeById(id);
    }

    @RequestMapping(value = "/beeType/update", method = RequestMethod.POST)
    public void updateBEEType(@RequestBody SystemBEEType beeType) {
        SystemBEEType currentBEEType = systemService.findBEETypeById(beeType.getId());
        currentBEEType.setDescription(beeType.getDescription());
        systemService.saveBEEType(currentBEEType);
    }

    @RequestMapping(value = "/beeType/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getBEETypeAllShort() {
        return systemService.findAllBEETypesShort();
    }

    @RequestMapping(value = "/beeType/delete", method = RequestMethod.POST)
    public boolean deleteBEEType(@RequestBody SystemBEEType beeType) {
        return systemService.deleteBEEType(beeType);
    }

//SettleDiscMethod

    @RequestMapping(value = "/settleDiscMethod/add", method = RequestMethod.POST)
    public SystemSettleDiscMethod addSettleDiscMethod(@RequestBody SystemSettleDiscMethod settleDiscMethod) {
        return systemService.saveSettleDiscMethod(settleDiscMethod);
    }

    @RequestMapping(value = "/settleDiscMethod/id", method = RequestMethod.POST)
    public SystemSettleDiscMethod getSettleDiscMethodById(@RequestBody Long id) {
        return systemService.findSettleDiscMethodById(id);
    }

    @RequestMapping(value = "/settleDiscMethod/update", method = RequestMethod.POST)
    public void updateSettleDiscMethod(@RequestBody SystemSettleDiscMethod settleDiscMethod) {
        SystemSettleDiscMethod currentSettleDiscMethod = systemService.findSettleDiscMethodById(settleDiscMethod.getId());
        currentSettleDiscMethod.setDescription(settleDiscMethod.getDescription());
        systemService.saveSettleDiscMethod(currentSettleDiscMethod);
    }

    @RequestMapping(value = "/settleDiscMethod/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getSettleDiscMethodAllShort() {
        return systemService.findAllSettleDiscMethodsShort();
    }

    @RequestMapping(value = "/settleDiscMethod/delete", method = RequestMethod.POST)
    public boolean deleteSettleDiscMethod(@RequestBody SystemSettleDiscMethod settleDiscMethod) {
        return systemService.deleteSettleDiscMethod(settleDiscMethod);
    }

//TradeLevel

    @RequestMapping(value = "/tradeLevel/add", method = RequestMethod.POST)
    public SystemTradeLevel addTradeLevel(@RequestBody SystemTradeLevel tradeLevel) {
        return systemService.saveTradeLevel(tradeLevel);
    }

    @RequestMapping(value = "/tradeLevel/id", method = RequestMethod.POST)
    public SystemTradeLevel getTradeLevelById(@RequestBody Long id) {
        return systemService.findTradeLevelById(id);
    }

    @RequestMapping(value = "/tradeLevel/update", method = RequestMethod.POST)
    public void updateTradeLevel(@RequestBody SystemTradeLevel tradeLevel) {
        SystemTradeLevel currentTradeLevel = systemService.findTradeLevelById(tradeLevel.getId());
        currentTradeLevel.setDescription(tradeLevel.getDescription());
        systemService.saveTradeLevel(currentTradeLevel);
    }

    @RequestMapping(value = "/tradeLevel/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getTradeLevelAllShort() {
        return systemService.findAllTradeLevelsShort();
    }

    @RequestMapping(value = "/tradeLevel/delete", method = RequestMethod.POST)
    public boolean deleteTradeLevel(@RequestBody SystemTradeLevel tradeLevel) {
        return systemService.deleteTradeLevel(tradeLevel);
    }

//PickMethod

    @RequestMapping(value = "/pickMethod/add", method = RequestMethod.POST)
    public SystemPickMethod addPickMethod(@RequestBody SystemPickMethod pickMethod) {
        return systemService.savePickMethod(pickMethod);
    }

    @RequestMapping(value = "/pickMethod/id", method = RequestMethod.POST)
    public SystemPickMethod getPickMethodById(@RequestBody Long id) {
        return systemService.findPickMethodById(id);
    }

    @RequestMapping(value = "/pickMethod/update", method = RequestMethod.POST)
    public void updatePickMethod(@RequestBody SystemPickMethod pickMethod) {
        SystemPickMethod currentPickMethod = systemService.findPickMethodById(pickMethod.getId());
        currentPickMethod.setName(pickMethod.getName());
        systemService.savePickMethod(currentPickMethod);
    }

    @RequestMapping(value = "/pickMethod/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getPickMethodAllShort() {
        return systemService.findAllPickMethodsShort();
    }

    @RequestMapping(value = "/pickMethod/delete", method = RequestMethod.POST)
    public boolean deletePickMethod(@RequestBody SystemPickMethod pickMethod) {
        return systemService.deletePickMethod(pickMethod);
    }    
}
