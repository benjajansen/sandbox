package com.benja.service.impl;

import com.benja.dao.admin.*;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.admin.*;
import com.benja.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminBranchDao branchDao;

    @Autowired
    private AdminCityTownDao cityTownDao;

    @Autowired
    private AdminCountryDao countryDao;

    @Autowired
    private AdminProvinceDao provinceDao;

    @Autowired
    private AdminCompanyDao companyDao;
    
    @Override
    public AdminBranch saveBranch(AdminBranch branch) {
        return branchDao.save(branch);
    }

    @Override
    public List<AdminBranch> findAllBranchs() {
        return branchDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllBranchsShort() {
        List<AdminBranch> branch;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        branch = branchDao.findAll();

        for (AdminBranch brn : branch) {
            ShortDataPackage.setId(brn.getId());
            ShortDataPackage.setValue(brn.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public AdminBranch findBranchByDescription(String description) {
        AdminBranch branch = new AdminBranch();

        if(description != null && !description.isEmpty())
            branch = branchDao.findByDescription(description);

        return branch;
    }

    @Override
    public AdminBranch findBranchById(Long id) {
        return branchDao.findById(id);
    }

    @Override
    public boolean deleteBranch(AdminBranch branch) {
        branchDao.delete(branch);
        return branchDao.exists(branch.getId());
    }

//CityTown
    @Override
    public AdminCityTown saveCityTown(AdminCityTown cityTown) {
        return cityTownDao.save(cityTown);
}

    @Override
    public List<AdminCityTown> findAllCityTowns() {
        return cityTownDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllCityTownsShort() {
        List<AdminCityTown> cityTown;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        cityTown = cityTownDao.findAll();

        for (AdminCityTown city : cityTown) {
            ShortDataPackage.setId(city.getId());
            ShortDataPackage.setValue(city.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<AdminCityTown> findAllCityTownsByCountry(Long id) {
        return cityTownDao.findByCountry_Id(id);
    }

    @Override
    public List<ShortDataPackage> findAllCityTownsByCountryShort(Long id) {
        List<AdminCityTown> cityTown;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        cityTown = cityTownDao.findByCountry_Id(id);

        for (AdminCityTown city : cityTown) {
            ShortDataPackage.setId(city.getId());
            ShortDataPackage.setValue(city.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<AdminCityTown> findAllCityTownsByProvince(Long id) {
        return cityTownDao.findByProvince_Id(id);
    }

    @Override
    public List<ShortDataPackage> findAllCityTownsByProvinceShort(Long id) {
        List<AdminCityTown> cityTown;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        cityTown = cityTownDao.findByProvince_Id(id);

        for (AdminCityTown city : cityTown) {
            ShortDataPackage.setId(city.getId());
            ShortDataPackage.setValue(city.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<AdminCityTown> findAllCityTownsByCountryAndProvince(Long countryId, Long provinceId) {
        return cityTownDao.findByCountry_IdAndProvince_Id(countryId, provinceId);
    }

    @Override
    public List<ShortDataPackage> findAllCityTownsByCountryAndProvinceShort(Long countryId, Long provinceId) {
        List<AdminCityTown> cityTown;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        cityTown = cityTownDao.findByCountry_IdAndProvince_Id(countryId, provinceId);

        for (AdminCityTown city : cityTown) {
            ShortDataPackage.setId(city.getId());
            ShortDataPackage.setValue(city.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public AdminCityTown findCityTownByDescription(String description) {
        AdminCityTown cityTown = new AdminCityTown();

        if(description != null && !description.isEmpty())
            cityTown = cityTownDao.findByDescription(description);

        return cityTown;
    }

    @Override
    public AdminCityTown findCityTownById(Long id) {
        return cityTownDao.findById(id);
    }

    @Override
    public boolean deleteCityTown(AdminCityTown cityTown) {
        cityTownDao.delete(cityTown);
        return cityTownDao.exists(cityTown.getId());
    }
    
//Country
    @Override
    public AdminCountry saveCountry(AdminCountry country) {
        return countryDao.save(country);
    }

    @Override
    public List<AdminCountry> findAllCountrys() {
        return countryDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllCountrysShort() {
        List<AdminCountry> country;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        country = countryDao.findAll();

        for (AdminCountry cntry : country) {
            ShortDataPackage.setId(cntry.getId());
            ShortDataPackage.setValue(cntry.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public AdminCountry findCountryByDescription(String description) {
        AdminCountry country = new AdminCountry();

        if(description != null && !description.isEmpty())
            country = countryDao.findByDescription(description);

        return country;
    }

    @Override
    public AdminCountry findCountryById(Long id) {
        return countryDao.findById(id);
    }

    @Override
    public boolean deleteCountry(AdminCountry country) {
        countryDao.delete(country);
        return countryDao.exists(country.getId());
    }
    
//Province
    @Override
    public AdminProvince saveProvince(AdminProvince province) {
        return provinceDao.save(province);
    }

    @Override
    public List<AdminProvince> findAllProvinces() {
        return provinceDao.findAll();
    }

    @Override
    public List<ShortDataPackage> findAllProvincesShort() {
        List<AdminProvince> province;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        province = provinceDao.findAll();

        for (AdminProvince pro : province) {
            ShortDataPackage.setId(pro.getId());
            ShortDataPackage.setValue(pro.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public List<AdminProvince> findAllProvincesByCountry(Long id) {
        return provinceDao.findByCountry_Id(id);
    }

    @Override
    public List<ShortDataPackage> findAllProvincesByCountryShort(Long id) {
        List<AdminProvince> province;
        List<ShortDataPackage> lstShortDataPackage = new ArrayList<ShortDataPackage>();
        ShortDataPackage ShortDataPackage = new ShortDataPackage();

        province = provinceDao.findByCountry_Id(id);

        for (AdminProvince pro : province) {
            ShortDataPackage.setId(pro.getId());
            ShortDataPackage.setValue(pro.getDescription());
            lstShortDataPackage.add(ShortDataPackage);
            ShortDataPackage = new ShortDataPackage();
        }

        return lstShortDataPackage;
    }

    @Override
    public AdminProvince findProvinceByDescription(String description) {
        AdminProvince province = new AdminProvince();

        if(description != null && !description.isEmpty())
            province = provinceDao.findByDescription(description);

        return province;
    }

    @Override
    public AdminProvince findProvinceById(Long id) {
        return provinceDao.findById(id);
    }

    @Override
    public boolean deleteProvince(AdminProvince province) {
        provinceDao.delete(province);
        return provinceDao.exists(province.getId());
    }

    @Override
    public AdminTransporter saveTransporter(AdminTransporter transporter) {
        return null;
    }

    @Override
    public List<AdminTransporter> findAllTransporters() {
        return null;
    }

    @Override
    public List<ShortDataPackage> findAllTransportersShort() {
        return null;
    }

    @Override
    public AdminTransporter findTransporterByDescription(String description) {
        return null;
    }

    @Override
    public AdminTransporter findTransporterById(Long id) {
        return null;
    }

    @Override
    public boolean deleteTransporter(AdminTransporter transporter) {
        return false;
    }

    //Compnay
@Override
    public AdminCompany saveCompany(AdminCompany company) {
        return companyDao.save(company);
    }
}
