package com.benja.controller;

import com.benja.model.security.SecurityPassword;
import com.benja.model.security.SecurityUser;
import com.benja.model.security.SecurityUserPackage;
import com.benja.service.DebtorService;
import com.benja.service.SecurityService;
import com.benja.service.WarehouseService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.util.Date;
import java.util.Map;

/**
 * Created by Benja on 4/17/2017.
 */
@RestController
@RequestMapping("/user")
public class SecurityController {

    @Autowired
    private SecurityService securityService;

    @Autowired
    private DebtorService debtorService;

    @Autowired
    private WarehouseService warehouseService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody Map<String, String> json) throws ServletException {
        if(json.get("username") == null || json.get("password") == null) {
            throw new ServletException("Please fill in username and password");
        }

        String logonName = json.get("username");
        String password = json.get("password");

        SecurityUser securityUser = securityService.findUserByLogonName(logonName);

        //I could do custom error message for both username and password, but if a hacker knows he has a correct usename, half his job is done.
        if(securityUser == null) {
            throw new ServletException("invalid");
        }

        SecurityPassword securityPassword = securityService.findPasswordByUser(securityUser.getId());

        if ((securityPassword == null) || (!securityPassword.getCurrentPassword().equals(password))) {
            throw new ServletException("invalid");
        }

        return Jwts.builder().setSubject(logonName).claim("roles", "user").setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secretkey").compact();
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public SecurityUser registerUser(@RequestBody SecurityUserPackage userPackage) {
        SecurityUser securityUser = new SecurityUser();
        this.populateUserFromPackage(securityUser, userPackage);
        return securityService.saveUser(securityUser);
    }

    private SecurityUser populateUserFromPackage(SecurityUser securityUser, SecurityUserPackage securityUserPackage) {
        try {
            securityUser.setFirstName(securityUserPackage.getFirstName());
            securityUser.setLastName(securityUserPackage.getLastName());
            securityUser.setJobTitle(securityUserPackage.getJobTitle());
            securityUser.setTelNo(securityUserPackage.getTelNo());
            securityUser.setCellNo(securityUserPackage.getCellNo());
            securityUser.setEmail(securityUserPackage.getEmail());
            securityUser.setLogonName(securityUserPackage.getLogonName());

            securityUser.setRegisterDate(securityUserPackage.getRegisterDate());
            securityUser.setCreateDate(securityUserPackage.getCreateDate());

            securityUser.setActive(securityUserPackage.isActive());
            securityUser.setInactiveDate(securityUserPackage.getInactiveDate());

            if(securityUserPackage.getCustomer() != null && securityUserPackage.getCustomer() > 0)
                securityUser.setCustomer(debtorService.findDebtorById(securityUserPackage.getCustomer()));

            if(securityUserPackage.getWarehouse() != null && securityUserPackage.getWarehouse() > 0)
                securityUser.setWarehouse(warehouseService.findWarehouseById(securityUserPackage.getWarehouse()));

            if(securityUserPackage.getGroupHeader() != null && securityUserPackage.getGroupHeader() > 0)
                securityUser.setGroupHeader(securityService.findHeaderById(securityUserPackage.getGroupHeader()));

            if(securityUser.getCreateUser() == null && securityUserPackage.getCreateUser() != null)
                securityUser.setCreateUser(securityService.findUserById(securityUserPackage.getCreateUser()));
        }
        catch (Exception e) {
            return securityUser;
        }

        return securityUser;
    }
}
