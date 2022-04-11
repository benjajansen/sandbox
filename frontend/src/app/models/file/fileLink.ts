import {SecurityUser} from "../security/User";


export class FileLink {
  public id: number;
  public name: string;      //This is the name of the file the user gives us.
  public fileName: string;  //This is the name of the file we give it when we save.
  public createUser: SecurityUser;
  public createDate: Date;
}
