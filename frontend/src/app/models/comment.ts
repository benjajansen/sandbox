import {Photo} from './photo'
import {SecurityUser} from './security/User'

export class Comment {
  commentId: number;
  photo: Photo;
  userName: string;
  content: string;
  photoId: number;
}
