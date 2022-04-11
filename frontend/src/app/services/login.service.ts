/**
 * Created by Benja on 4/30/2017.
 */

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  token: string;

  constructor(private http: Http){}

  sendCredentials(model) {
    let tokenUrl1 = "http://localhost:8080/user/login";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    let ret = new Observable();
    ret = this.http.post(tokenUrl1, JSON.stringify(model), {headers: headers1});
    return ret;
  }

  sendToken(token) {
    let tokenUrl2 = "http://localhost:8080/rest/user/users";
    //console.log('Bearer ' + token);

    let getHeaders = new Headers({'Authorization':'Bearer '+token});

    return this.http.get(tokenUrl2, {headers: getHeaders})
  }

  logout() {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("currentUserName", "");
  }

  checkLogin() {
    if (sessionStorage.getItem("currentUserName")!= null &&
        sessionStorage.getItem("currentUserName")!='' &&
        sessionStorage.getItem("token")!= null &&
        sessionStorage.getItem("token")!='') {
      //console.log(sessionStorage.getItem("currentUserName"));
      //console.log(sessionStorage.getItem("token"));
      return true;
    } else {
      return false;
    }
  }

}
