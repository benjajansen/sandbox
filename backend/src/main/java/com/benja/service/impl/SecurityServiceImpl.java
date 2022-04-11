package com.benja.service.impl;

import com.benja.dao.security.*;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.security.*;
import com.benja.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
@Service
public class SecurityServiceImpl implements SecurityService{

    @Autowired
    private UserDao userDao;

    @Autowired
    private GroupHeaderDao headerDao;
    
    @Autowired
    private GroupDetailDao detailDao;
    
    @Autowired
    private Menu1Dao menu1Dao;

    @Autowired
    private Menu2Dao menu2Dao;

    @Autowired
    private Menu3Dao menu3Dao;

    @Autowired
    private PasswordDao passwordDao;

    @Autowired
    private AccessTypeDao accessTypeDao;

    @Override
    public List<SecurityUser> findAllUsers() {
        return userDao.findAll();
    }

    @Override
    public boolean findUserByEmail(String email) {
        return userDao.existsByEmail(email);
    }

    @Override
    public List<SecurityUserAutoComp> findAllUsersAuto() {
        List<SecurityUser> users;
        List<SecurityUserAutoComp> securityUserAutoCompList = new ArrayList<SecurityUserAutoComp>();
        SecurityUserAutoComp securityUserAutoComp = new SecurityUserAutoComp();

        users = userDao.findAll();

        for (SecurityUser user : users) {
            securityUserAutoComp.setId(user.getId());
            securityUserAutoComp.setLogonName(user.getLogonName());
            securityUserAutoComp.setHeaderId(user.getGroupHeader().getId());
            securityUserAutoComp.setDebtorId(user.getCustomer().getId());
            securityUserAutoCompList.add(securityUserAutoComp);
            securityUserAutoComp = new SecurityUserAutoComp();
        }

        return securityUserAutoCompList;
    }

    @Override
    public SecurityUser findUserByLogonName(String logonName) {
        return userDao.findByLogonName(logonName);
    }

    @Override
    public SecurityUser findUserById(Long id) {
        return userDao.findById(id);
    }

    @Override
    public SecurityUser saveUser(SecurityUser user) {
        return userDao.save(user);
    }

//GroupHeader
    @Override
    public List<SecurityGroupHeader> findAllHeaders() {
        return headerDao.findAll();
    }

    @Override
    public SecurityGroupHeader findHeaderById(Long id) {
        return headerDao.findById(id);
    }

    @Override
    public SecurityGroupHeader saveHeader(SecurityGroupHeader securityGroupHeader) {
        return headerDao.save(securityGroupHeader);
    }
    
//GroupDetail
    @Override
    public List<SecurityGroupDetail> findAllDetails() {
    return detailDao.findAll();
}

    @Override
    public SecurityGroupDetail findDetailById(Long id) {
        return detailDao.findById(id);
    }

    @Override
    public SecurityGroupDetail saveDetail(SecurityGroupDetail securityGroupDetail) {
        return detailDao.save(securityGroupDetail);
    }

//Menu1
    @Override
    public List<SecurityMenu1> findAllMenu1s() {
        return menu1Dao.findAll();
    }

    @Override
    public SecurityMenu1 findMenu1ById(Long id) {
        return menu1Dao.findById(id);
    }

    @Override
    public SecurityMenu1 saveMenu1(SecurityMenu1 securityMenu1) {
        return menu1Dao.save(securityMenu1);
    }

//Menu2
    @Override
    public List<SecurityMenu2> findAllMenu2s() {
        return menu2Dao.findAll();
    }

    @Override
    public SecurityMenu2 findMenu2ById(Long id) {
        return menu2Dao.findById(id);
    }

    @Override
    public SecurityMenu2 saveMenu2(SecurityMenu2 securityMenu2) {
        return menu2Dao.save(securityMenu2);
    }

//Menu3
    @Override
    public List<SecurityMenu3> findAllMenu3s() {
        return menu3Dao.findAll();
    }

    @Override
    public SecurityMenu3 findMenu3ById(Long id) {
        return menu3Dao.findById(id);
    }

    @Override
    public SecurityMenu3 saveMenu3(SecurityMenu3 securityMenu3) {
        return menu3Dao.save(securityMenu3);
    }

//Password
    @Override
    public List<SecurityPassword> findAllPasswords() {
        return passwordDao.findAll();
    }

    @Override
    public SecurityPassword findPasswordById(Long id) {
        return passwordDao.findById(id);
    }

    @Override
    public SecurityPassword findPasswordByUser(Long id) {
        return passwordDao.findByUser_id(id);
    }

    @Override
    public SecurityPassword savePassword(SecurityPassword securityPassword) {
        return passwordDao.save(securityPassword);
    }

//AccessType
    @Override
    public List<SecurityAccessType> findAllAccessTypes() {
        return accessTypeDao.findAll();
    }

    @Override
    public SecurityAccessType findAccessTypeById(Long id) {
        return accessTypeDao.findById(id);
    }

    @Override
    public SecurityAccessType saveAccessType(SecurityAccessType accessType) {
        return accessTypeDao.save(accessType);
    }
}
