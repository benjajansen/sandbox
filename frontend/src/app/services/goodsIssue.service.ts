/**
 * Created by Benja on 5/6/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {GoodsIssueHeader} from "../models/goodsIssue/GoodsIssueHeader";
import {GoodsIssueDetail} from "../models/goodsIssue/GoodsIssueDetail";
import {GoodsIssueDetailPackage} from "../models/dataPackages/GoodsIssueDetailPackage";


@Injectable()
export class GoodsIssueService {
  constructor (private http: Http) {}

  sendGoodsIssueHeader(goodsIssueHeader:GoodsIssueHeader) {
    let url = "http://localhost:8080/rest/goodsIssue/header/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsIssueHeader), {headers: headers1});
  }

  updateGoodsIssueHeader(goodsIssueHeader:GoodsIssueHeader) {
    let url = "http://localhost:8080/rest/goodsIssue/header/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsIssueHeader), {headers: headers1});
  }

  getGoodsIssueHeaderShort() {
    let url = "http://localhost:8080/rest/goodsIssue/header/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getGoodsIssueHeaderShortByDebtorAndCostCentre(debtorId:number, costCentreId:number) {
    let url = "http://localhost:8080/rest/goodsIssue/header/getAllShortByDebtorAndCostCentre";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify({'debtorId':debtorId, 'costCentreId':costCentreId}), {headers: headers1});
  }

  getGoodsIssueHeaderById(id: number) {
    let url = "http://localhost:8080/rest/goodsIssue/header/id";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(id), {headers: headers1});
  }

//Goods Issue Detail
  sendGoodsIssueDetail(goodsIssueDetail:GoodsIssueDetail) {
    let url = "http://localhost:8080/rest/goodsIssue/detail/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsIssueDetail), {headers: headers1});
  }

  getAllGoodsIssueDetailByHeaderId(headerId: number) {
    let url = "http://localhost:8080/rest/goodsIssue/detail/getAllHeaderId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(headerId), {headers: headers1});
  }

  updateGoodsIssueDetail(goodsIssueDetail:GoodsIssueDetailPackage) {
    let url = "http://localhost:8080/rest/goodsIssue/detail/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsIssueDetail), {headers: headers1});
  }

  deleteGoodsIssueDetail(goodsIssueDetail:GoodsIssueDetail) {
    let url = "http://localhost:8080/rest/goodsIssue/detail/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsIssueDetail), {headers: headers1});
  }
}
