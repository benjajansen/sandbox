package com.benja.service;

import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.security.*;

import java.util.List;

/**
 * Created by Benja on 4/17/2017.
 */
public interface SecurityService {
    List<SecurityUser> findAllUsers();

    boolean findUserByEmail(String email);

    List<SecurityUserAutoComp> findAllUsersAuto();

    SecurityUser findUserByLogonName(String logonName);

    SecurityUser findUserById(Long id);

    SecurityUser saveUser(SecurityUser user);

//GroupHeader
    List<SecurityGroupHeader> findAllHeaders();

    SecurityGroupHeader findHeaderById(Long id);

    SecurityGroupHeader saveHeader(SecurityGroupHeader securityGroupHeader);

//GroupDetail
    List<SecurityGroupDetail> findAllDetails();

    SecurityGroupDetail findDetailById(Long id);

    SecurityGroupDetail saveDetail(SecurityGroupDetail securityGroupDetail);
    
//Menu1
    List<SecurityMenu1> findAllMenu1s();

    SecurityMenu1 findMenu1ById(Long id);

    SecurityMenu1 saveMenu1(SecurityMenu1 securityMenu1);

//Menu2
    List<SecurityMenu2> findAllMenu2s();

    SecurityMenu2 findMenu2ById(Long id);

    SecurityMenu2 saveMenu2(SecurityMenu2 securityMenu2);

//Menu3
    List<SecurityMenu3> findAllMenu3s();

    SecurityMenu3 findMenu3ById(Long id);

    SecurityMenu3 saveMenu3(SecurityMenu3 securityMenu3);

//Password
    List<SecurityPassword> findAllPasswords();

    SecurityPassword findPasswordById(Long id);

    SecurityPassword findPasswordByUser(Long id);

    SecurityPassword savePassword(SecurityPassword securityPassword);

//AccessType
    List<SecurityAccessType> findAllAccessTypes();

    SecurityAccessType findAccessTypeById(Long id);

    SecurityAccessType saveAccessType(SecurityAccessType accessType);
}
