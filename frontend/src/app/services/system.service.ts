import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {SystemPaymentTerm} from "../models/system/PaymentTerm";
import {SystemPaymentType} from "../models/system/PaymentType";
import {SystemPaymentMethod} from "../models/system/PaymentMethod";
import {SystemTitle} from "../models/system/Title";
import {SystemBEELevel} from "../models/system/BEELevel";
import {SystemBEEType} from "../models/system/BEEType";
import {SystemSettleDiscMethod} from "../models/system/SettleDiscMethod";
import {SystemTradeLevel} from "../models/system/TradeLevel";
import {SystemPickMethod} from "../models/system/PickMethod";

/**
 * Created by Ben on 24 Jul 2017.
 */

@Injectable()
export class SystemService {
  constructor (private http: Http) {}

  sendPaymentMethod(paymentMethod:SystemPaymentMethod) {
    let url = "http://localhost:8080/rest/system/paymentMethod/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentMethod), {headers: headers1});
  }

  updatePaymentMethod(paymentMethod:SystemPaymentMethod) {
    let url = "http://localhost:8080/rest/system/paymentMethod/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentMethod), {headers: headers1});
  }

  deletePaymentMethod(paymentMethod:SystemPaymentMethod) {
    let url = "http://localhost:8080/rest/system/paymentMethod/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentMethod), {headers: headers1});
  }

  getPaymentMethodShort() {
    let url = "http://localhost:8080/rest/system/paymentMethod/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//PaymentTerm

  sendPaymentTerm(paymentTerm:SystemPaymentTerm) {
    let url = "http://localhost:8080/rest/system/paymentTerm/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentTerm), {headers: headers1});
  }

  updatePaymentTerm(paymentTerm:SystemPaymentTerm) {
    let url = "http://localhost:8080/rest/system/paymentTerm/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentTerm), {headers: headers1});
  }

  deletePaymentTerm(paymentTerm:SystemPaymentTerm) {
    let url = "http://localhost:8080/rest/system/paymentTerm/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentTerm), {headers: headers1});
  }

  getPaymentTermShort() {
    let url = "http://localhost:8080/rest/system/paymentTerm/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//PaymentType

  sendPaymentType(paymentType:SystemPaymentType) {
    let url = "http://localhost:8080/rest/system/paymentType/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentType), {headers: headers1});
  }

  updatePaymentType(paymentType:SystemPaymentType) {
    let url = "http://localhost:8080/rest/system/paymentType/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentType), {headers: headers1});
  }

  deletePaymentType(paymentType:SystemPaymentType) {
    let url = "http://localhost:8080/rest/system/paymentType/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(paymentType), {headers: headers1});
  }

  getPaymentTypeShort() {
    let url = "http://localhost:8080/rest/system/paymentType/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//Title

  sendTitle(title:SystemTitle) {
    let url = "http://localhost:8080/rest/system/title/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(title), {headers: headers1});
  }

  updateTitle(title:SystemTitle) {
    let url = "http://localhost:8080/rest/system/title/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(title), {headers: headers1});
  }

  deleteTitle(title:SystemTitle) {
    let url = "http://localhost:8080/rest/system/title/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(title), {headers: headers1});
  }

  getTitleShort() {
    let url = "http://localhost:8080/rest/system/title/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//BEELevel

  sendBEELevel(beeLevel:SystemBEELevel) {
    let url = "http://localhost:8080/rest/system/beeLevel/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(beeLevel), {headers: headers1});
  }

  updateBEELevel(beeLevel:SystemBEELevel) {
    let url = "http://localhost:8080/rest/system/beeLevel/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(beeLevel), {headers: headers1});
  }

  deleteBEELevel(beeLevel:SystemBEELevel) {
    let url = "http://localhost:8080/rest/system/beeLevel/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(beeLevel), {headers: headers1});
  }

  getBEELevelShort() {
    let url = "http://localhost:8080/rest/system/beeLevel/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//BEEType

  sendBEEType(beeType:SystemBEEType) {
    let url = "http://localhost:8080/rest/system/beeType/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(beeType), {headers: headers1});
  }

  updateBEEType(beeType:SystemBEEType) {
    let url = "http://localhost:8080/rest/system/beeType/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(beeType), {headers: headers1});
  }

  deleteBEEType(beeType:SystemBEEType) {
    let url = "http://localhost:8080/rest/system/beeType/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(beeType), {headers: headers1});
  }

  getBEETypeShort() {
    let url = "http://localhost:8080/rest/system/beeType/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//SettleDiscMethod

  sendSettleDiscMethod(settleDiscMethod:SystemSettleDiscMethod) {
    let url = "http://localhost:8080/rest/system/settleDiscMethod/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(settleDiscMethod), {headers: headers1});
  }

  updateSettleDiscMethod(settleDiscMethod:SystemSettleDiscMethod) {
    let url = "http://localhost:8080/rest/system/settleDiscMethod/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(settleDiscMethod), {headers: headers1});
  }

  deleteSettleDiscMethod(settleDiscMethod:SystemSettleDiscMethod) {
    let url = "http://localhost:8080/rest/system/settleDiscMethod/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(settleDiscMethod), {headers: headers1});
  }

  getSettleDiscMethodShort() {
    let url = "http://localhost:8080/rest/system/settleDiscMethod/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//TradeLevel

  sendTradeLevel(tradeLevel:SystemTradeLevel) {
    let url = "http://localhost:8080/rest/system/tradeLevel/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(tradeLevel), {headers: headers1});
  }

  updateTradeLevel(tradeLevel:SystemTradeLevel) {
    let url = "http://localhost:8080/rest/system/tradeLevel/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(tradeLevel), {headers: headers1});
  }

  deleteTradeLevel(tradeLevel:SystemTradeLevel) {
    let url = "http://localhost:8080/rest/system/tradeLevel/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(tradeLevel), {headers: headers1});
  }

  getTradeLevelShort() {
    let url = "http://localhost:8080/rest/system/tradeLevel/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }

//PickMethod

  sendPickMethod(pickMethod:SystemPickMethod) {
    let url = "http://localhost:8080/rest/system/pickMethod/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(pickMethod), {headers: headers1});
  }

  updatePickMethod(pickMethod:SystemPickMethod) {
    let url = "http://localhost:8080/rest/system/pickMethod/update";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(pickMethod), {headers: headers1});
  }

  deletePickMethod(pickMethod:SystemPickMethod) {
    let url = "http://localhost:8080/rest/system/pickMethod/delete";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(pickMethod), {headers: headers1});
  }

  getPickMethodShort() {
    let url = "http://localhost:8080/rest/system/pickMethod/getAllShort";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, null, {headers: headers1});
  }
}
