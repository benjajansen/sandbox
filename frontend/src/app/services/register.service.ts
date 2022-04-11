import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SecurityUser } from '../models/security/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {
  constructor (private  http: Http) {}

  sendUser(user:SecurityUser) {
    let url = "http://localhost:8080/user/register";
    let headers1 = new Headers({'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: headers1});
  }
}
