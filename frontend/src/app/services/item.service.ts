/**
 * Created by Benja on 5/28/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {ItemMaster} from "../models/item/ItemMaster";
import {ItemCategory} from "../models/item/Category";
import {ItemGroup} from "../models/item/Group";
import {ItemUnitOfMeasure} from "../models/item/UnitOfMeasure";



@Injectable()
export class ItemService {
  constructor (private http: Http) {}

  sendItemMaster(itemMaster:ItemMaster) {
    let url = "http://localhost:8080/rest/item/itemMaster/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(itemMaster), {headers: headers1});
  }

  updateItemMaster(itemMaster:ItemMaster) {
    let url = "http://localhost:8080/rest/item/itemMaster/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(itemMaster), {headers: headers1});
  }

  getItemMasterShort() {
    let url = "http://localhost:8080/rest/item/itemMaster/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getItemMasterAuto() {
    let url = "http://localhost:8080/rest/item/itemMaster/getAllAuto";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getItemMasterByAcc(acc:string) {
    let url = "http://localhost:8080/rest/item/itemMaster/accNo";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(acc), {headers: headers1});
  }

  getItemMasterById(id: number) {
    let url = "http://localhost:8080/rest/item/itemMaster/id";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(id), {headers: headers1});
  }

//Category
  sendCategory(category:ItemCategory) {
    let url = "http://localhost:8080/rest/item/category/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(category), {headers: headers1});
  }

  updateCategory(category:ItemCategory) {
    let url = "http://localhost:8080/rest/item/category/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(category), {headers: headers1});
  }

  deleteCategory(category:ItemCategory) {
    let url = "http://localhost:8080/rest/item/category/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(category), {headers: headers1});
  }

  getCategoryShort() {
    let url = "http://localhost:8080/rest/item/category/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//Group
  sendGroup(group:ItemGroup) {
    let url = "http://localhost:8080/rest/item/group/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(group), {headers: headers1});
  }

  updateGroup(group:ItemGroup) {
    let url = "http://localhost:8080/rest/item/group/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(group), {headers: headers1});
  }

  deleteGroup(group:ItemGroup) {
    let url = "http://localhost:8080/rest/item/group/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(group), {headers: headers1});
  }

  getGroupShort() {
    let url = "http://localhost:8080/rest/item/group/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//Unit Of Measure
  sendUnitOfMeasure(unitOfMeasure:ItemUnitOfMeasure) {
    let url = "http://localhost:8080/rest/item/unitOfMeasure/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(unitOfMeasure), {headers: headers1});
  }

  updateUnitOfMeasure(unitOfMeasure:ItemUnitOfMeasure) {
    let url = "http://localhost:8080/rest/item/unitOfMeasure/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(unitOfMeasure), {headers: headers1});
  }

  deleteUnitOfMeasure(unitOfMeasure:ItemUnitOfMeasure) {
    let url = "http://localhost:8080/rest/item/unitOfMeasure/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(unitOfMeasure), {headers: headers1});
  }

  getUnitOfMeasureShort() {
    let url = "http://localhost:8080/rest/item/unitOfMeasure/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }
}
