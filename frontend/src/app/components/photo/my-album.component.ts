/**
 * Created by Benja on 5/2/2017.
 */

import {Component, Input} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {SecurityService} from '../../services/security.service';
import {SecurityUser} from '../../models/security/User';
import {Photo} from '../../models/photo';
import {Router} from '@angular/router';

@Component({
  selector: 'my-album',
  templateUrl: './my-album.component.html'
})
export class MyAlbum {

  private photos: Photo[];
  private user: SecurityUser;
  private selectedPhoto: Photo;

  constructor (private photoService: PhotoService, private router: Router, private SecurityService: SecurityService) {
    this.SecurityService.getUserByName(sessionStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.photoService.getPhotosByUser(this.user).subscribe(
          photos => {
            console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList);
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  onSelect(photo:Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
  }

}
