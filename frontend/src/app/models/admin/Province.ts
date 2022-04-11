
import {SecurityUser} from "../security/User";
import {AdminCountry} from "./Country";

export class AdminProvince {
  public id: number;
  public code: string;
  public description: string;
  public country: AdminCountry;
  public createUser: SecurityUser;
  public createDate: Date;
}

