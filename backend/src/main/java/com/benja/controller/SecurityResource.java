package com.benja.controller;

import com.benja.model.security.*;
import com.benja.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Benja on 5/1/2017.
 */
@RestController
@RequestMapping("/rest/security")
public class SecurityResource {

    @Autowired
    private SecurityService securityService;

    @RequestMapping("/user/users")
    public List<SecurityUser> findAllUsers() {
        return securityService.findAllUsers();
    }

    @RequestMapping(value = "/user/userName", method = RequestMethod.POST)
    public SecurityUser findByLogonName(@RequestBody String logonName) {
        //System.out.println(logonName);
        //System.out.println(securityService.findByLogonName(logonName));
        return securityService.findUserByLogonName(logonName);
    }

    @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    public SecurityUser updateUser(@RequestBody SecurityUser user) {
        return securityService.saveUser(user);
    }

    @RequestMapping(value = "/user/checkEmail", method = RequestMethod.POST)
    public boolean checkEmail(@RequestBody String email) {
        return securityService.findUserByEmail(email);
    }

    @RequestMapping(value = "/itemMaster/getAllAuto", method = RequestMethod.POST)
    public List<SecurityUserAutoComp> getUserAllAuto() {
        return securityService.findAllUsersAuto();
    }

//GroupHeader
    @RequestMapping(value = "/header/id", method = RequestMethod.POST)
    public SecurityGroupHeader findHeaderById(@RequestBody Long id) {
        return securityService.findHeaderById(id);
    }

    @RequestMapping(value = "/header/getAll", method = RequestMethod.POST)
    public List<SecurityGroupHeader> findAllHeaders() {
        return securityService.findAllHeaders();
    }

    @RequestMapping(value = "/header/add", method = RequestMethod.POST)
    public SecurityGroupHeader saveHeader(@RequestBody SecurityGroupHeader securityGroupHeader) {
        return securityService.saveHeader(securityGroupHeader);
    }

//GroupDetail
    @RequestMapping(value = "/detail/id", method = RequestMethod.POST)
    public SecurityGroupDetail findDetailById(@RequestBody Long id) {
        return securityService.findDetailById(id);
    }

    @RequestMapping(value = "/detail/getAll", method = RequestMethod.POST)
    public List<SecurityGroupDetail> findAllDetails() {
        return securityService.findAllDetails();
    }

    @RequestMapping(value = "/detail/add", method = RequestMethod.POST)
    public SecurityGroupDetail saveDetail(@RequestBody SecurityGroupDetail securityGroupDetail) {
        return securityService.saveDetail(securityGroupDetail);
    }

//Menu1
    @RequestMapping(value = "/menu1/id", method = RequestMethod.POST)
    public SecurityMenu1 findMenu1ById(@RequestBody Long id) {
        return securityService.findMenu1ById(id);
    }

    @RequestMapping(value = "/menu1/getAll", method = RequestMethod.POST)
    public List<SecurityMenu1> findAllMenu1s() {
        return securityService.findAllMenu1s();
    }

    @RequestMapping(value = "/menu1/add", method = RequestMethod.POST)
    public SecurityMenu1 saveMenu1(@RequestBody SecurityMenu1 securityMenu1) {
        return securityService.saveMenu1(securityMenu1);
    }

//Menu2
    @RequestMapping(value = "/menu2/id", method = RequestMethod.POST)
    public SecurityMenu2 findMenu2ById(@RequestBody Long id) {
        return securityService.findMenu2ById(id);
    }

    @RequestMapping(value = "/menu2/getAll", method = RequestMethod.POST)
    public List<SecurityMenu2> findAllMenu2s() {
        return securityService.findAllMenu2s();
    }

    @RequestMapping(value = "/menu2/add", method = RequestMethod.POST)
    public SecurityMenu2 saveMenu2(@RequestBody SecurityMenu2 securityMenu2) {
        return securityService.saveMenu2(securityMenu2);
    }

//Menu3
    @RequestMapping(value = "/menu3/id", method = RequestMethod.POST)
    public SecurityMenu3 findMenu3ById(@RequestBody Long id) {
        return securityService.findMenu3ById(id);
    }

    @RequestMapping(value = "/menu3/getAll", method = RequestMethod.POST)
    public List<SecurityMenu3> findAllMenu3s() {
        return securityService.findAllMenu3s();
    }

    @RequestMapping(value = "/menu3/add", method = RequestMethod.POST)
    public SecurityMenu3 saveMenu3(@RequestBody SecurityMenu3 securityMenu3) {
        return securityService.saveMenu3(securityMenu3);
    }

//Password
    @RequestMapping(value = "/password/userId", method = RequestMethod.POST)
    public Long findPasswordIdByUserId(@RequestBody Long userId) {
        return securityService.findPasswordByUser(userId).getId();
    }

    @RequestMapping(value = "/password/add", method = RequestMethod.POST)
    public SecurityPassword savePassword(@RequestBody String password, @RequestBody Long userId) {
        SecurityPassword securityPassword = new SecurityPassword();

        securityPassword.setUser(securityService.findUserById(userId));
        securityPassword.setCurrentPassword(password);

        return securityService.savePassword(securityPassword);
    }

    @RequestMapping(value = "/password/update", method = RequestMethod.POST)
    public SecurityPassword saveUpdate(@RequestBody String password, @RequestBody Long userId) {
        SecurityPassword securityPassword = securityService.findPasswordByUser(userId);

        if(securityPassword.getPreviousOne() != null && !securityPassword.getPreviousOne().isEmpty())
            securityPassword.setPreviousTwo(securityPassword.getPreviousOne());

        securityPassword.setPreviousOne(securityPassword.getCurrentPassword());
        securityPassword.setCurrentPassword(password);

        return securityService.savePassword(securityPassword);
    }

//AccessType
    @RequestMapping(value = "/accessType/id", method = RequestMethod.POST)
    public SecurityAccessType findAccessTypeById(@RequestBody Long id) {
        return securityService.findAccessTypeById(id);
    }

    @RequestMapping(value = "/accessType/getAll", method = RequestMethod.POST)
    public List<SecurityAccessType> findAllAccessTypes() {
        return securityService.findAllAccessTypes();
    }

    @RequestMapping(value = "/accessType/add", method = RequestMethod.POST)
    public SecurityAccessType saveAccessType(@RequestBody SecurityAccessType securityAccessType) {
        return securityService.saveAccessType(securityAccessType);
    }    
}
