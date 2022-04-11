package com.benja.service;

import com.benja.model.admin.*;
import com.benja.model.dataPackage.ShortDataPackage;
import com.benja.model.warehouse.Warehouse;

import java.util.List;

/**
 * Created by Ben on 24 Jul 2017.
 */
public interface AdminService {
    AdminBranch saveBranch(AdminBranch branch);

    List<AdminBranch> findAllBranchs();

    List<ShortDataPackage> findAllBranchsShort();

    AdminBranch findBranchByDescription(String description);

    AdminBranch findBranchById(Long id);

    boolean deleteBranch(AdminBranch branch);
    
//CityTown
    AdminCityTown saveCityTown(AdminCityTown cityTown);

    List<AdminCityTown> findAllCityTowns();

    List<ShortDataPackage> findAllCityTownsShort();

    List<AdminCityTown> findAllCityTownsByCountry(Long id);

    List<ShortDataPackage> findAllCityTownsByCountryShort(Long id);

    List<AdminCityTown> findAllCityTownsByProvince(Long id);

    List<ShortDataPackage> findAllCityTownsByProvinceShort(Long id);

    List<AdminCityTown> findAllCityTownsByCountryAndProvince(Long countryId, Long provinceId);

    List<ShortDataPackage> findAllCityTownsByCountryAndProvinceShort(Long countryId, Long provinceId);

    AdminCityTown findCityTownByDescription(String description);

    AdminCityTown findCityTownById(Long id);

    boolean deleteCityTown(AdminCityTown cityTown);
    
//Country
    AdminCountry saveCountry(AdminCountry country);

    List<AdminCountry> findAllCountrys();

    List<ShortDataPackage> findAllCountrysShort();

    AdminCountry findCountryByDescription(String description);

    AdminCountry findCountryById(Long id);

    boolean deleteCountry(AdminCountry country);

//Province
    AdminProvince saveProvince(AdminProvince province);

    List<AdminProvince> findAllProvinces();

    List<ShortDataPackage> findAllProvincesShort();

    List<AdminProvince> findAllProvincesByCountry(Long id);

    List<ShortDataPackage> findAllProvincesByCountryShort(Long id);

    AdminProvince findProvinceByDescription(String description);

    AdminProvince findProvinceById(Long id);

    boolean deleteProvince(AdminProvince province);

//Transporter
    AdminTransporter saveTransporter(AdminTransporter transporter);

    List<AdminTransporter> findAllTransporters();

    List<ShortDataPackage> findAllTransportersShort();

    AdminTransporter findTransporterByDescription(String description);

    AdminTransporter findTransporterById(Long id);

    boolean deleteTransporter(AdminTransporter transporter);
    
//Company
    AdminCompany saveCompany(AdminCompany company);
}
