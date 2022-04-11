
import {SecurityUser} from "../security/User";
import {AdminCountry} from "./Country";
import {AdminProvince} from "./Province";

export class AdminCityTown {
  public id: number;
  public code: string;
  public description: string;
  public country: AdminCountry;
  public province: AdminProvince;
  public createUser: SecurityUser;
  public createDate: Date;
}

