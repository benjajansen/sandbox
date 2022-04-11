package com.benja.controller;

import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.admin.*;
import com.benja.model.warehouse.Warehouse;
import com.benja.model.warehouse.WarehousePackage;
import com.benja.service.AdminService;
import com.benja.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by Ben on 24 Jul 2017.
 */
@RestController
@RequestMapping("/rest/admin")
public class AdminResource {

    @Autowired
    private AdminService adminService;

    @Autowired
    private SecurityService securityService;

    @RequestMapping(value = "/branch/add", method = RequestMethod.POST)
    public AdminBranch addBranch(@RequestBody AdminBranch branchPackage) {
        /*
        AdminBranch adminBranch = new AdminBranch();
        this.populateBranchFromPackage(adminBranch, branchPackage);
        return adminService.saveBranch(adminBranch);
        */
        return adminService.saveBranch(branchPackage);
    }

    @RequestMapping(value = "/branch/id", method = RequestMethod.POST)
    public AdminBranch getBranchById(@RequestBody Long id) {
        return adminService.findBranchById(id);
    }

    @RequestMapping(value = "/branch/update", method = RequestMethod.POST)
    public void updateBranch(@RequestBody AdminBranchPackage branchPackage) {
        AdminBranch currentBranch = adminService.findBranchById(branchPackage.getId());
        currentBranch.setDescription(branchPackage.getDescription());
        adminService.saveBranch(currentBranch);
    }

    @RequestMapping(value = "/branch/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getBranchAllShort() {
        return adminService.findAllBranchsShort();
    }

    @RequestMapping(value = "/branch/delete", method = RequestMethod.POST)
    public boolean deleteBranch(@RequestBody AdminBranch branch) {
        return adminService.deleteBranch(branch);
    }

    private AdminBranch populateBranchFromPackage(AdminBranch adminBranch, AdminBranchPackage adminBranchPackage) {
        try {
            adminBranch.setDescription(adminBranchPackage.getDescription());
            adminBranch.setCreateDate(adminBranchPackage.getCreateDate());

            if(adminBranch.getCreateUser() == null && adminBranchPackage.getCreateUser() != null)
                adminBranch.setCreateUser(securityService.findUserById(adminBranchPackage.getCreateUser()));
        }
        catch (Exception e) {
            return adminBranch;
        }

        return adminBranch;
    }
    
//CityTown

    @RequestMapping(value = "/cityTown/add", method = RequestMethod.POST)
    public AdminCityTown addCityTown(@RequestBody AdminCityTownPackage cityTownPackage) {
        AdminCityTown cityTown = new AdminCityTown();

        this.populateCityTownFromPackage(cityTown, cityTownPackage);

        return adminService.saveCityTown(cityTown);
    }

    @RequestMapping(value = "/cityTown/id", method = RequestMethod.POST)
    public AdminCityTown getCityTownById(@RequestBody Long id) {
        return adminService.findCityTownById(id);
    }

    @RequestMapping(value = "/cityTown/update", method = RequestMethod.POST)
    public void updateCityTown(@RequestBody AdminCityTownPackage cityTownPackage) {
        AdminCityTown cityTown = adminService.findCityTownById(cityTownPackage.getId());

        this.populateCityTownFromPackage(cityTown, cityTownPackage);

        adminService.saveCityTown(cityTown);
    }

    @RequestMapping(value = "/cityTown/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCityTownAllShort() {
        return adminService.findAllCityTownsShort();
    }

    @RequestMapping(value = "/cityTown/delete", method = RequestMethod.POST)
    public boolean deleteCityTown(@RequestBody AdminCityTown cityTown) {
        return adminService.deleteCityTown(cityTown);
    }

    @RequestMapping(value = "/cityTown/countryIdShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCityTownByCountryShort(@RequestBody Long id) {
        return adminService.findAllCityTownsByCountryShort(id);
    }

    @RequestMapping(value = "/cityTown/provinceIdShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCityTownByProvinceShort(@RequestBody Long id) {
        return adminService.findAllCityTownsByProvinceShort(id);
    }

    @RequestMapping(value = "/cityTown/countryIdProvinceIdShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCityTownByProvinceShort(@RequestBody Map<String, String> json) {
        String countryId = json.get("countryId");
        String provinceId = json.get("provinceId");

        return adminService.findAllCityTownsByCountryAndProvinceShort(Long.parseLong(countryId), Long.parseLong(provinceId));
    }

    private AdminCityTown populateCityTownFromPackage(AdminCityTown cityTown, AdminCityTownPackage cityTownPackage) {
        try {
            cityTown.setDescription(cityTownPackage.getDescription());

            if(cityTownPackage.getCountry() != null && !cityTownPackage.getCountry().isEmpty())
                cityTown.setCountry(adminService.findCountryByDescription(cityTownPackage.getCountry()));

            if(cityTownPackage.getProvince() != null && !cityTownPackage.getProvince().isEmpty())
                cityTown.setProvince(adminService.findProvinceByDescription(cityTownPackage.getProvince()));

            if(cityTown.getCreateUser() == null && cityTownPackage.getCreateUser() != null)
                cityTown.setCreateUser(cityTownPackage.getCreateUser());

        } catch (Exception e) {
            return cityTown;
        }

        return cityTown;
    }

//Country

    @RequestMapping(value = "/country/add", method = RequestMethod.POST)
    public AdminCountry addCountry(@RequestBody AdminCountry country) {
        return adminService.saveCountry(country);
    }

    @RequestMapping(value = "/country/id", method = RequestMethod.POST)
    public AdminCountry getCountryById(@RequestBody Long id) {
        return adminService.findCountryById(id);
    }

    @RequestMapping(value = "/country/update", method = RequestMethod.POST)
    public void updateCountry(@RequestBody AdminCountry country) {
        AdminCountry currentCountry = adminService.findCountryById(country.getId());
        currentCountry.setDescription(country.getDescription());
        adminService.saveCountry(currentCountry);
    }

    @RequestMapping(value = "/country/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getCountryAllShort() {
        return adminService.findAllCountrysShort();
    }

    @RequestMapping(value = "/country/delete", method = RequestMethod.POST)
    public boolean deleteCountry(@RequestBody AdminCountry country) {
        return adminService.deleteCountry(country);
    }
    
//Province

    @RequestMapping(value = "/province/add", method = RequestMethod.POST)
    public AdminProvince addProvince(@RequestBody AdminProvincePackage provincePackage) {
        AdminProvince province = new AdminProvince();

        this.populateProvinceFromPackage(province, provincePackage);

        return adminService.saveProvince(province);
    }

    @RequestMapping(value = "/province/id", method = RequestMethod.POST)
    public AdminProvince getProvinceById(@RequestBody Long id) {
        return adminService.findProvinceById(id);
    }

    @RequestMapping(value = "/province/update", method = RequestMethod.POST)
    public void updateProvince(@RequestBody AdminProvincePackage provincePackage) {
        AdminProvince province = adminService.findProvinceById(provincePackage.getId());

        this.populateProvinceFromPackage(province, provincePackage);

        adminService.saveProvince(province);
    }

    @RequestMapping(value = "/province/getAllShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getProvinceAllShort() {
        return adminService.findAllProvincesShort();
    }

    @RequestMapping(value = "/province/delete", method = RequestMethod.POST)
    public boolean deleteProvince(@RequestBody AdminProvince province) {
        return adminService.deleteProvince(province);
    }

    @RequestMapping(value = "/province/countryIdShort", method = RequestMethod.POST)
    public List<ShortDataPackage> getProvinceByCountryShort(@RequestBody Long id) {
        return adminService.findAllProvincesByCountryShort(id);
    }

    private AdminProvince populateProvinceFromPackage(AdminProvince province, AdminProvincePackage provincePackage) {
        try {
            province.setDescription(provincePackage.getDescription());

            if(provincePackage.getCountry() != null && !provincePackage.getCountry().isEmpty())
                province.setCountry(adminService.findCountryByDescription(provincePackage.getCountry()));
        } catch (Exception e) {
            return province;
        }

        return province;
    }
    
//Company
    @RequestMapping(value = "/company/add", method = RequestMethod.POST)
    public AdminCompany addCompany(@RequestBody AdminCompany company) {
        return adminService.saveCompany(company);
    }
    

    @RequestMapping(value = "/company/update", method = RequestMethod.POST)
    public void updateCompany(@RequestBody AdminCompany company) {
        adminService.saveCompany(company);
    }
}
