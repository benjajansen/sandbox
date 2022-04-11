
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {AdminBranch} from "../models/admin/Branch";
import {AdminCityTown} from "../models/admin/CityTown";
import {AdminCountry} from "../models/admin/Country";
import {AdminProvince} from "../models/admin/Province";
import {AdminCompany} from "../models/admin/Company";
import {WarehouseZone} from "../models/warehouse/Zone";
import {Warehouse} from "../models/warehouse/Warehouse";
/**
 * Created by Ben on 24 Jul 2017.
 */

@Injectable()
export class AdminService {
  constructor (private http: Http) {}

  sendBranch(branch:AdminBranch) {
    let url = "http://localhost:8080/rest/admin/branch/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    console.log("wtf: " + JSON.stringify(branch))
    return this.http.post(url, JSON.stringify(branch), {headers: headers1});
  }

  updateBranch(branch:AdminBranch) {
    let url = "http://localhost:8080/rest/admin/branch/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(branch), {headers: headers1});
  }

  getBranchShort() {
    let url = "http://localhost:8080/rest/admin/branch/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  deleteBranch(branch:AdminBranch) {
    let url = "http://localhost:8080/rest/admin/branch/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(branch), {headers: headers1});
  }
//CityTown

  sendCityTown(cityTown:AdminCityTown) {
    let url = "http://localhost:8080/rest/admin/cityTown/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(cityTown), {headers: headers1});
  }

  getCityTownShort() {
    let url = "http://localhost:8080/rest/admin/cityTown/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getCityTownByCountryAndProvinceShort(countryId:number, provinceId:number) {
    let url = "http://localhost:8080/rest/admin/cityTown/countryIdProvinceIdShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    console.log("what I'm sending: " + JSON.stringify({'countryId':countryId, 'provinceId':provinceId}))
    return this.http.post(url, JSON.stringify({'countryId':countryId, 'provinceId':provinceId}), {headers: headers1});
  }

  updateCityTown(cityTown:AdminCityTown) {
    let url = "http://localhost:8080/rest/admin/cityTown/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(cityTown), {headers: headers1});
  }

  deleteCityTown(cityTown:AdminCityTown) {
    let url = "http://localhost:8080/rest/admin/cityTown/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(cityTown), {headers: headers1});
  }

//Country

  sendCountry(country:AdminCountry) {
    let url = "http://localhost:8080/rest/admin/country/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    console.log("wtf: " + JSON.stringify(country))
    return this.http.post(url, JSON.stringify(country), {headers: headers1});
  }

  getCountryShort() {
    let url = "http://localhost:8080/rest/admin/country/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  updateCountry(country:AdminCountry) {
    let url = "http://localhost:8080/rest/admin/country/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(country), {headers: headers1});
  }

  deleteCountry(country:AdminCountry) {
    let url = "http://localhost:8080/rest/admin/country/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(country), {headers: headers1});
  }
//Province

  sendProvince(province:AdminProvince) {
    let url = "http://localhost:8080/rest/admin/province/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(province), {headers: headers1});
  }

  getProvinceShort() {
    let url = "http://localhost:8080/rest/admin/province/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getProvincesByCountryId(countryId: number) {
    let url = "http://localhost:8080/rest/admin/province/countryIdShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(countryId), {headers: headers1});
  }

  updateProvince(province:AdminProvince) {
    let url = "http://localhost:8080/rest/admin/province/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(province), {headers: headers1});
  }

  deleteProvince(province:AdminProvince) {
    let url = "http://localhost:8080/rest/admin/province/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(province), {headers: headers1});
  }

//Warehouse
  sendWarehouse(warehouse:Warehouse) {
    let url = "http://localhost:8080/rest/admin/warehouse/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(warehouse), {headers: headers1});
  }

  updateWarehouse(warehouse:Warehouse) {
    let url = "http://localhost:8080/rest/admin/warehouse/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(warehouse), {headers: headers1});
  }

  getWarehouseShort() {
    let url = "http://localhost:8080/rest/admin/warehouse/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getWarehouseShortByBranch(branchId:number) {
    let url = "http://localhost:8080/rest/admin/warehouse/getAllShortByBranch";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(branchId), {headers: headers1});
  }

  deleteWarehouse(warehouse:WarehouseZone) {
    let url = "http://localhost:8080/rest/admin/warehouse/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(warehouse), {headers: headers1});
  }

//Zone
  sendZone(zone:WarehouseZone) {
    let url = "http://localhost:8080/rest/admin/zone/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(zone), {headers: headers1});
  }

  updateZone(zone:WarehouseZone) {
    let url = "http://localhost:8080/rest/admin/zone/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(zone), {headers: headers1});
  }

  getZoneShort() {
    let url = "http://localhost:8080/rest/admin/zone/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getZoneShortByWarehouse(warehouseId:number) {
    let url = "http://localhost:8080/rest/admin/zone/getAllShortByWarehouse";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(warehouseId), {headers: headers1});
  }

  deleteZone(zone:WarehouseZone) {
    let url = "http://localhost:8080/rest/admin/zone/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(zone), {headers: headers1});
  }

//Company
  sendCompany(company:AdminCompany) {
    let url = "http://localhost:8080/rest/admin/company/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(company), {headers: headers1});
  }

  updateCompany(company:AdminCompany) {
    let url = "http://localhost:8080/rest/admin/company/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(company), {headers: headers1});
  }
}
