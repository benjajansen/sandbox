/**
 * Created by Benja on 5/6/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {SalesOrderHeader} from "../models/salesOrder/SalesOrderHeader";
import {SalesOrderDetail} from "../models/salesOrder/SalesOrderDetail";
import {SalesOrderDetailPackage} from "../models/dataPackages/SalesOrderDetailPackage";



@Injectable()
export class SalesOrderService {
  constructor (private http: Http) {}

  sendSalesOrderHeader(salesOrder:SalesOrderHeader) {
    let url = "http://localhost:8080/rest/salesOrder/header/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(salesOrder), {headers: headers1});
  }

  updateSalesOrderHeader(salesOrder:SalesOrderHeader) {
    let url = "http://localhost:8080/rest/salesOrder/header/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(salesOrder), {headers: headers1});
  }

  getSalesOrderHeaderShort() {
    let url = "http://localhost:8080/rest/salesOrder/header/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getSalesOrderHeaderShortByDebtorAndCostCentre(debtorId:number, costCentreId:number) {
    let url = "http://localhost:8080/rest/salesOrder/header/getAllShortByDebtorAndCostCentre";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify({'debtorId':debtorId, 'costCentreId':costCentreId}), {headers: headers1});
  }

  getSalesOrderHeaderById(id: number) {
    let url = "http://localhost:8080/rest/salesOrder/header/id";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(id), {headers: headers1});
  }

//Sales Order Detail
  sendSalesOrderDetail(salesOrderDetail:SalesOrderDetail) {
    let url = "http://localhost:8080/rest/salesOrder/detail/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(salesOrderDetail), {headers: headers1});
  }

  getAllSalesOrderDetailByHeaderId(headerId: number) {
    let url = "http://localhost:8080/rest/salesOrder/detail/getAllHeaderId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(headerId), {headers: headers1});
  }

  updateSalesOrderDetail(salesOrderDetail:SalesOrderDetailPackage) {
    let url = "http://localhost:8080/rest/salesOrder/detail/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(salesOrderDetail), {headers: headers1});
  }

  deleteSalesOrderDetail(salesOrderDetail:SalesOrderDetail) {
    let url = "http://localhost:8080/rest/salesOrder/detail/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(salesOrderDetail), {headers: headers1});
  }
}
