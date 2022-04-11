/**
 * Created by Benja on 5/6/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {FileLink} from "../models/file/fileLink";


@Injectable()
export class FileService {
  constructor (private http: Http) {}

  sendFileLink(fileLink:FileLink) {
    let url = "http://localhost:8080/rest/file/fileLink/add";
    let headers1 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(fileLink), {headers: headers1});
  }
}
