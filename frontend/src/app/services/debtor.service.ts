/**
 * Created by Benja on 5/6/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Debtor} from "../models/debtor/Debtor";
import {DebtorBusinessType} from "../models/debtor/BusinessType";
import {DebtorBusinessUnit} from "../models/debtor/BusinessUnit";
import {DebtorCategory} from "../models/debtor/Category";
import {DebtorTypeOfOrganisation} from "../models/debtor/TypeOfOrganisation";
import {DebtorCostCentre} from "../models/debtor/CostCentre";



@Injectable()
export class DebtorService {
  constructor (private http: Http) {}

  sendDebtor(debtor:Debtor) {
    let url = "http://localhost:8080/rest/debtor/debtor/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(debtor), {headers: headers1});
  }

  updateDebtor(debtor:Debtor) {
    let url = "http://localhost:8080/rest/debtor/debtor/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(debtor), {headers: headers1});
  }

  getDebtorShort() {
    let url = "http://localhost:8080/rest/debtor/debtor/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getDebtorAuto() {
    let url = "http://localhost:8080/rest/debtor/debtor/getAllAuto";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getDebtorById(id: number) {
    let url = "http://localhost:8080/rest/debtor/debtor/id";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(id), {headers: headers1});
  }

//BusinessType
  sendBusinessType(businessType:DebtorBusinessType) {
    let url = "http://localhost:8080/rest/debtor/businessType/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    console.log("package to be stringified:")
    console.log(businessType)
    console.log("what the stringify looks like:")
    console.log(JSON.stringify(businessType))
    return this.http.post(url, JSON.stringify(businessType), {headers: headers1});
  }

  updateBusinessType(businessType:DebtorBusinessType) {
    let url = "http://localhost:8080/rest/debtor/businessType/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(businessType), {headers: headers1});
  }

  deleteBusinessType(businessType:DebtorBusinessType) {
    let url = "http://localhost:8080/rest/debtor/businessType/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(businessType), {headers: headers1});
  }

  getBusinessTypeShort() {
    let url = "http://localhost:8080/rest/debtor/businessType/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//BusinessUnit
  sendBusinessUnit(businessUnit:DebtorBusinessUnit) {
    let url = "http://localhost:8080/rest/debtor/businessUnit/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(businessUnit), {headers: headers1});
  }

  updateBusinessUnit(businessUnit:DebtorBusinessUnit) {
    let url = "http://localhost:8080/rest/debtor/businessUnit/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(businessUnit), {headers: headers1});
  }

  deleteBusinessUnit(businessUnit:DebtorBusinessUnit) {
    let url = "http://localhost:8080/rest/debtor/businessUnit/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(businessUnit), {headers: headers1});
  }

  getBusinessUnitShort() {
    let url = "http://localhost:8080/rest/debtor/businessUnit/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//Category
  sendCategory(category:DebtorCategory) {
    let url = "http://localhost:8080/rest/debtor/category/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(category), {headers: headers1});
  }

  updateCategory(category:DebtorCategory) {
    let url = "http://localhost:8080/rest/debtor/category/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(category), {headers: headers1});
  }

  deleteCategory(category:DebtorCategory) {
    let url = "http://localhost:8080/rest/debtor/category/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(category), {headers: headers1});
  }

  getCategoryShort() {
    let url = "http://localhost:8080/rest/debtor/category/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//TypeOfOrganisation
  sendTypeOfOrganisation(typeOfOrganisation:DebtorTypeOfOrganisation) {
    let url = "http://localhost:8080/rest/debtor/typeOfOrganisation/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(typeOfOrganisation), {headers: headers1});
  }

  updateTypeOfOrganisation(typeOfOrganisation:DebtorTypeOfOrganisation) {
    let url = "http://localhost:8080/rest/debtor/typeOfOrganisation/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(typeOfOrganisation), {headers: headers1});
  }

  deleteTypeOfOrganisation(typeOfOrganisation:DebtorTypeOfOrganisation) {
    let url = "http://localhost:8080/rest/debtor/typeOfOrganisation/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(typeOfOrganisation), {headers: headers1});
  }

  getTypeOfOrganisationShort() {
    let url = "http://localhost:8080/rest/debtor/typeOfOrganisation/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//Cost Centre
  sendCostCentre(costCentre:DebtorCostCentre) {
    let url = "http://localhost:8080/rest/debtor/costCentre/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(costCentre), {headers: headers1});
  }

  updateCostCentre(costCentre:DebtorCostCentre) {
    let url = "http://localhost:8080/rest/debtor/costCentre/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(costCentre), {headers: headers1});
  }

  getCostCentreShort() {
    let url = "http://localhost:8080/rest/debtor/costCentre/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getCostCentreAuto() {
    let url = "http://localhost:8080/rest/debtor/costCentre/getAllAuto";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getCostCentreByDebtorAuto(debtorId: number) {
    let url = "http://localhost:8080/rest/debtor/costCentre/getAllByDebtorAuto";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(debtorId), {headers: headers1});
  }

  getCostCentreById(id: number) {
    let url = "http://localhost:8080/rest/debtor/costCentre/id";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(id), {headers: headers1});
  }
}
