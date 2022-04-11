/**
 * Created by Benja on 5/6/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {GoodsReceiveHeader} from "../models/goodsReceive/GoodsReceiveHeader";
import {GoodsReceiveDetail} from "../models/goodsReceive/GoodsReceiveDetail";
import {GoodsReceiveDetailPackage} from "../models/dataPackages/GoodsReceiveDetailPackage";



@Injectable()
export class GoodsReceiveService {
  constructor (private http: Http) {}

  sendGoodsReceiveHeader(goodsReceiveHeader:GoodsReceiveHeader) {
    let url = "http://localhost:8080/rest/goodsReceive/header/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsReceiveHeader), {headers: headers1});
  }

  updateGoodsReceiveHeader(goodsReceiveHeader:GoodsReceiveHeader) {
    let url = "http://localhost:8080/rest/goodsReceive/header/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsReceiveHeader), {headers: headers1});
  }

  getGoodsReceiveHeaderShort() {
    let url = "http://localhost:8080/rest/goodsReceive/header/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

  getGoodsReceiveHeaderShortByDebtorAndCostCentre(debtorId:number, costCentreId:number) {
    let url = "http://localhost:8080/rest/goodsReceive/header/getAllShortByDebtorAndCostCentre";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify({'debtorId':debtorId, 'costCentreId':costCentreId}), {headers: headers1});
  }

  getGoodsReceiveHeaderById(id: number) {
    let url = "http://localhost:8080/rest/goodsReceive/header/id";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(id), {headers: headers1});
  }

//Goods Receive Detail
  sendGoodsReceiveDetail(goodsReceiveDetail:GoodsReceiveDetail) {
    let url = "http://localhost:8080/rest/goodsReceive/detail/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsReceiveDetail), {headers: headers1});
  }

  getAllGoodsReceiveDetailByHeaderId(headerId: number) {
    let url = "http://localhost:8080/rest/goodsReceive/detail/getAllHeaderId";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(headerId), {headers: headers1});
  }

  updateGoodsReceiveDetail(goodsReceiveDetail:GoodsReceiveDetailPackage) {
    let url = "http://localhost:8080/rest/goodsReceive/detail/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsReceiveDetail), {headers: headers1});
  }

  deleteGoodsReceiveDetail(goodsReceiveDetail:GoodsReceiveDetail) {
    let url = "http://localhost:8080/rest/goodsReceive/detail/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(goodsReceiveDetail), {headers: headers1});
  }
}
