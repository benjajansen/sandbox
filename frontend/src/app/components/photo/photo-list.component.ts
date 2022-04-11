import {Component} from "@angular/core";
import {PhotoService} from '../../services/photo.service';
import {Photo} from '../../models/photo'


@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoList {
  photos: Photo[];
  selectedPhoto: Photo;

  constructor (private  photoService: PhotoService) {
    this.photoService.getPhotos().subscribe(
      data => console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
  }
}
