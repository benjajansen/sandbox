import {SecurityUser} from "../security/User";
import {AdminCityTown} from "../admin/CityTown";
import {SystemTitle} from "../system/Title";
import {DebtorCostCentre} from "../debtor/CostCentre";
import {Debtor} from "../debtor/Debtor";
import {SystemStatus} from "../system/Status";
import {AdminTransporter} from "../admin/Transporter";
import {Warehouse} from "../warehouse/Warehouse";
/**
 * Created by Benja on 5/6/2017.
 */

export class SalesOrderHeader {
  public id: number;
  public orderDate: Date;
  public status: SystemStatus;
  public debtor: Debtor;
  public costCentre: DebtorCostCentre;
  public custOrderNo: string;
  public releaseNo: string;
  public transporter: AdminTransporter;
  public street1: string;
  public street2: string;
  public street3: string;
  public street4: string;
  public streetPostalCode: string;
  public warehouse: Warehouse;
  public city: AdminCityTown;
  public gps: string;
  public oppSName: string;
  public oppFName: string;
  public oppTitle: SystemTitle;
  public oppCellNo: string;
  public oppEmail: string;
  public delInstruction: string;
  public comments: string;
  public createUser: SecurityUser;
  public createDate: Date;
  public modUser: SecurityUser;
  public modDate: Date;


  constructor() {
    this.orderDate = new Date();
    this.custOrderNo = "";
    this.releaseNo = "";
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
    this.delInstruction = "";
    this.createDate = new Date();
  }
}
