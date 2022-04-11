/**
 * Created by Benja on 5/4/2017.
 */

import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {SecurityService} from '../../services/security.service';
import {SecurityUser} from '../../models/security/User';
import {UploadFileService} from "../../services/uploadFile.service";
import {FileService} from "../../services/file.service";
import {FileLink} from "../../models/file/fileLink";

@Component({
  selector: 'add-photo',
  templateUrl: './add-photo.component.html'
})
export class AddPhoto {
  addPhotoForm = new FormGroup({
    photoName: new FormControl()
    ,title: new FormControl()
    ,description: new FormControl()
  })

  newFile: FileLink = new FileLink();
  photoAdded: boolean = false;
  user: SecurityUser;

  constructor (private uploadFileService:UploadFileService, private addFileService:FileService, private SecurityService:SecurityService) {}

  onSubmit() {
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.newFile.createUser = this.user;
        this.addFileService.sendFileLink(this.newFile).subscribe(
          data => {
            this.photoAdded = true;
            this.newFile = new FileLink();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }
}
