import {Comment} from './comment';
import {SecurityUser} from './security/User';

export class Photo {
  public photoId: number;
  public photoName: string;
  public title: string;
  public description: string;
  public user: SecurityUser;
  public imageName: string;
  public likedByUserList: SecurityUser[];
  public likes: number;
  public commentList: Comment[];
  public created: Date;
}
