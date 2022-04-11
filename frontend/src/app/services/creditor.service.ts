/**
 * Created by Benja on 5/28/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Creditor} from "../models/creditor/Creditor";
import {CreditorClassification} from "../models/creditor/Classification";
import {CreditorGroup} from "../models/creditor/Group";



@Injectable()
export class CreditorService {
  constructor (private http: Http) {}

  sendCreditor(creditor:Creditor) {
    let url = "http://localhost:8080/rest/creditor/creditor/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(creditor), {headers: headers1});
  }

  updateCreditor(creditor:Creditor) {
    let url = "http://localhost:8080/rest/creditor/creditor/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(creditor), {headers: headers1});
  }

  getCreditorShort() {
    let url = "http://localhost:8080/rest/creditor/creditor/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getCreditorAuto() {
    let url = "http://localhost:8080/rest/creditor/creditor/getAllAuto";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getCreditorByAcc(acc:string) {
    let url = "http://localhost:8080/rest/creditor/creditor/accNo";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(acc), {headers: headers1});
  }

  getCreditorById(id: number) {
    let url = "http://localhost:8080/rest/creditor/creditor/id";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(id), {headers: headers1});
  }

//Classification
  sendClassification(classification:CreditorClassification) {
    let url = "http://localhost:8080/rest/creditor/classification/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(classification), {headers: headers1});
  }

  updateClassification(classification:CreditorClassification) {
    let url = "http://localhost:8080/rest/creditor/classification/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(classification), {headers: headers1});
  }

  deleteClassification(classification:CreditorClassification) {
    let url = "http://localhost:8080/rest/creditor/classification/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(classification), {headers: headers1});
  }

  getClassificationShort() {
    let url = "http://localhost:8080/rest/creditor/classification/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//Group
  sendGroup(group:CreditorGroup) {
    let url = "http://localhost:8080/rest/creditor/group/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(group), {headers: headers1});
  }

  updateGroup(group:CreditorGroup) {
    let url = "http://localhost:8080/rest/creditor/group/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(group), {headers: headers1});
  }

  deleteGroup(group:CreditorGroup) {
    let url = "http://localhost:8080/rest/creditor/group/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(group), {headers: headers1});
  }

  getGroupShort() {
    let url = "http://localhost:8080/rest/creditor/group/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

}
