import {SecurityUser} from "../security/User";
import {AdminBranch} from "../admin/Branch";
import {AdminCountry} from "../admin/Country";
import {AdminProvince} from "../admin/Province";
import {AdminCityTown} from "../admin/CityTown";
import {SystemTitle} from "../system/Title";
import {Debtor} from "./Debtor";
/**
 * Created by Benja on 5/6/2017.
 */

export class DebtorCostCentre {
  public id: number;
  public ccNo: string;
  public debtor: Debtor;
  public name: string;
  public street1: string;
  public street2: string;
  public street3: string;
  public street4: string;
  public streetPostalCode: string;
  public branch: AdminBranch;
  public country: AdminCountry;
  public province: AdminProvince;
  public city: AdminCityTown;
  public gps: string;
  public oppSName: string;
  public oppFName: string;
  public oppTitle: SystemTitle;
  public oppCellNo: string;
  public oppEmail: string;
  public suspended: boolean;
  public suspendedDate: Date;
  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;


  constructor() {
    this.ccNo = "";
    this.name = "";
    this.street1 = "";
    this.street2 = "";
    this.street3 = "";
    this.street4 = "";
    this.streetPostalCode = "";
    this.gps = "";
    this.oppSName = "";
    this.oppFName = "";
    this.oppCellNo = "";
    this.oppEmail = "";
    this.suspended = false;
    this.createDate = new Date();
  }
}
