/**
 * Created by Benja on 5/2/2017.
 */

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class SecurityService {


  constructor (private http: Http) {}

  getUsers() {

  }

  getUserById(id: String) {

  }

  getUserByName(userName: String) {
    let tokenUrl = "http://localhost:8080/rest/security/user/userName";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer ' + sessionStorage.getItem("token")});
    return this.http.post(tokenUrl, userName, {headers: headers});
  }

//GroupHeader
  getGroupHeaderById(id: number) {
    let tokenUrl = "http://localhost:8080/rest/security/user/userName";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer ' + sessionStorage.getItem("token")});
    return this.http.post(tokenUrl, JSON.stringify(id), {headers: headers});
  }
}
