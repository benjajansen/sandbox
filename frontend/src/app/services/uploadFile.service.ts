/**
 * Created by Benja on 5/6/2017.
 */

import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UploadFileService {
  filesToUpload: Array<File>;

  error: String = "";

  constructor () {
    this.filesToUpload = [];
  }

  upload() {

    this.makeFileRequest("http://localhost:8080/rest/file/admin/upload", [], this.filesToUpload).map(responce => {
    }).catch(error => this.error = error);
    setTimeout(() => {
      console.log("Successfully uploaded !!");
    }, 10000);
    /*
    this.makeFileRequest("http://localhost:8080/rest/file/admin/upload", [], this.filesToUpload).then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      });
      */
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  private makeFileRequest (url: string, params: string[], files: File[]){
    return Observable.fromPromise(new Promise((resolve, reject) => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert("cheese")
            /*
            observer.next(JSON.parse(xhr.response));
            observer.complete();
            */
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem("token"));
      xhr.send(formData);
    }));
  }
  /*
  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++) {
        console.log("file number " + i)
        console.log(files[i])
        formData.append("uploads[]", files[i], files[i].name);
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            alert("Upload successful!");
          } else {
            reject(xhr.response);
          }
        }
      }

      console.log("post")
      xhr.open("POST", url, true);
      console.log("send request")
      xhr.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem("token"));
      console.log("send data")
      xhr.send(formData);
    });
  }
  */
}
