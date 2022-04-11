import { Component } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {

  apiEndPoint = "http://localhost:8080/rest/file/admin/upload";

  constructor(private http: Http) {
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers({'Accept': 'application/json', 'Authorization':'Bearer '+sessionStorage.getItem("token")});
      //headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      this.http.post(`${this.apiEndPoint}`, formData, options)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        )
    }
  }
}
